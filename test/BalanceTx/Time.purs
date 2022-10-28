module Test.Ctl.BalanceTx.Time (suite) where

import Contract.Prelude

import Contract.Config (testnetConfig)
import Contract.Log (logInfo')
import Contract.Monad (Contract, runContract)
import Contract.ScriptLookups
  ( ScriptLookups
  , UnattachedUnbalancedTx
  , mkUnbalancedTx
  )
import Contract.Time
  ( POSIXTime
  , Slot
  , always
  , from
  , getEraSummaries
  , getSystemStart
  , maxSlot
  , mkFiniteInterval
  , never
  , slotRangeToPosixTimeRange
  , slotToPosixTime
  , to
  )
import Contract.TxConstraints (mustValidateIn)
import Control.Monad.Except (throwError)
import Ctl.Internal.Cardano.Types.Transaction (_body)
import Ctl.Internal.Test.TestPlanM (TestPlanM)
import Ctl.Internal.Types.BigNum (BigNum)
import Ctl.Internal.Types.BigNum (fromInt, toInt) as BigNum
import Ctl.Internal.Types.Interval (Interval)
import Ctl.Internal.Types.UnbalancedTransaction (_transaction)
import Data.BigInt (fromString) as BigInt
import Data.Lens (view)
import Effect.Aff (Aff)
import Effect.Exception (error)
import Mote (group, test)
import Partial.Unsafe (unsafePartial)
import Test.Spec.Assertions (fail, shouldEqual)

suite :: TestPlanM (Aff Unit) Unit
suite = do
  group "BalanceTx.Time" do
    group "Single interval" do
      test "empty interval" $
        run testEmptyInterval
      test "always interval" $
        run (mkTestFromSingleInterval always)
      test "lowerRay interval" $
        run (mkTestFromSingleInterval $ to now)
      test "upperRay interval" $
        run (mkTestFromSingleInterval $ from now)
      test "finite interval" $
        run (mkTestFromSingleInterval (mkFiniteInterval now now))
    group "Multiple intervals" do
      test "empty intersection" $
        run testEmptyMultipleIntervals
      test "two finite interval"
        $ run
        $
          mkTestMultipleInterval
            [ mkFiniteInterval now (now + mkPosixTime "2000")
            , mkFiniteInterval (now + mkPosixTime "1000")
                (now + mkPosixTime "3000")
            ]
            ( mkFiniteInterval (now + mkPosixTime "1000")
                (now + mkPosixTime "2000")
            )
      test "two rays"
        $ run
        $
          mkTestMultipleInterval
            [ to (now + mkPosixTime "3000")
            , from now
            ]
            ( mkFiniteInterval now
                (now + mkPosixTime "3000")
            )

  where
  run = runContract testnetConfig { suppressLogs = true }

emptyLookup :: ScriptLookups Void
emptyLookup = mempty

now :: POSIXTime
now = mkPosixTime "1666918454000"

unsafeSubstractOne :: BigNum -> BigNum
unsafeSubstractOne value = unsafePartial $ fromJust
  $ BigNum.fromInt
  <$> (flip (-) 1 <$> BigNum.toInt value)

getTimeFromUnbalanced
  :: UnattachedUnbalancedTx -> Contract () (Interval POSIXTime)
getTimeFromUnbalanced utx =
  validityToPosixTime (unwrap body)
  where
  body = (_transaction <<< _body) `view` (unwrap utx).unbalancedTx

toPosixTime :: Slot -> Contract () POSIXTime
toPosixTime time = do
  eraSummaries <- getEraSummaries
  systemStart <- getSystemStart
  eitherTime <- liftEffect $ slotToPosixTime eraSummaries systemStart time
  case eitherTime of
    Left e -> (throwError <<< error <<< show) e
    Right value -> pure value

toPosixTimeRange :: Interval Slot -> Contract () (Interval POSIXTime)
toPosixTimeRange range = do
  eraSummaries <- getEraSummaries
  systemStart <- getSystemStart
  eitherRange <- liftEffect $
    slotRangeToPosixTimeRange eraSummaries systemStart range
  case eitherRange of
    Left e -> (throwError <<< error <<< show) e
    Right value -> pure value

validityToPosixTime
  :: forall (r :: Row Type)
   . { validityStartInterval :: Maybe Slot, ttl :: Maybe Slot | r }
  -> Contract () (Interval POSIXTime)
validityToPosixTime { validityStartInterval, ttl: timeToLive } =
  case validityStartInterval of
    Just start ->
      if start == maxSlot then
        pure never
      else
        case timeToLive of
          Just end ->
            let
              end' = substractOne end
              slotInterval = mkFiniteInterval start end'
            in
              do
                logInfo' $ show (unwrap end)
                logInfo' $ show $ BigNum.toInt (unwrap end)
                logInfo' $ show ((-) 1 <$> BigNum.toInt (unwrap end))
                logInfo' $ show end
                logInfo' $ show end'
                toPosixTimeRange slotInterval
          Nothing ->
            from <$> toPosixTime start
    Nothing ->
      case timeToLive of
        Nothing -> pure always
        Just end -> to <$> toPosixTime (substractOne end)
  where
  substractOne = wrap <<< unsafeSubstractOne <<< unwrap

mkPosixTime :: String -> POSIXTime
mkPosixTime = wrap <<< unsafePartial fromJust <<< BigInt.fromString

mkTestFromSingleInterval :: Interval POSIXTime -> Contract () Unit
mkTestFromSingleInterval interval = do
  let
    constraint = mustValidateIn interval
  mutx <- mkUnbalancedTx emptyLookup constraint
  case mutx of
    Left e -> fail $ show e
    Right utx ->
      do
        returnedInterval <- getTimeFromUnbalanced utx
        returnedInterval `shouldEqual` interval

testEmptyInterval :: Contract () Unit
testEmptyInterval = do
  let
    constraint = mustValidateIn never
  mutx <- mkUnbalancedTx emptyLookup constraint
  case mutx of
    Left e -> logInfo' $ show e
    Right utx -> fail $ "Empty interval must fail : " <> show utx

testEmptyMultipleIntervals :: Contract () Unit
testEmptyMultipleIntervals = do
  let
    intervals =
      [ mkFiniteInterval now (now + mkPosixTime "2000")
      , mkFiniteInterval (now + mkPosixTime "3000") (now + mkPosixTime "4000")
      ]
    constraint = foldMap mustValidateIn intervals
  mutx <- mkUnbalancedTx emptyLookup constraint
  case mutx of
    Left e -> logInfo' $ show e
    Right utx -> fail $ "Empty interval must fail : " <> show utx

mkTestMultipleInterval
  :: Array (Interval POSIXTime) -> Interval POSIXTime -> Contract () Unit
mkTestMultipleInterval intervals expected = do
  let
    constraint = foldMap mustValidateIn intervals
  mutx <- mkUnbalancedTx emptyLookup constraint
  case mutx of
    Left e -> fail $ show e
    Right utx ->
      do
        returnedInterval <- getTimeFromUnbalanced utx
        returnedInterval `shouldEqual` expected
