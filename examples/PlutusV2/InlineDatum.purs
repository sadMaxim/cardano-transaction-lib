-- | This module demonstrates creating a UTxO whose datum is inline via the
-- | `Contract` interface. The `checkDatumIsInlineScript` only validates if the
-- | scripts own input was supplied with an inline datum matching the redeemer.
module Ctl.Examples.PlutusV2.InlineDatum
  ( main
  , example
  , checkDatumIsInlineScript
  , payToCheckDatumIsInline
  , payToCheckDatumIsInlineWrong
  , readFromCheckDatumIsInline
  , spendFromCheckDatumIsInline
  ) where

import Contract.Prelude

import Contract.Address (scriptHashAddress)
import Contract.Config (ConfigParams, testnetNamiConfig)
import Contract.Log (logInfo')
import Contract.Monad (Contract, launchAff_, runContract)
import Contract.PlutusData
  ( Datum(Datum)
  , PlutusData(Integer)
  , Redeemer(Redeemer)
  )
import Contract.ScriptLookups as Lookups
import Contract.Scripts (Validator(Validator), ValidatorHash, validatorHash)
import Contract.TextEnvelope
  ( decodeTextEnvelope
  , plutusScriptV2FromEnvelope
  )
import Contract.Transaction
  ( OutputDatum(OutputDatum)
  , TransactionHash
  , TransactionInput(TransactionInput)
  , TransactionOutputWithRefScript(TransactionOutputWithRefScript)
  , awaitTxConfirmed
  )
import Contract.TxConstraints (TxConstraints)
import Contract.TxConstraints as Constraints
import Contract.Utxos (utxosAt)
import Contract.Value as Value
import Control.Monad.Error.Class (liftMaybe)
import Ctl.Examples.Helpers (buildBalanceSignAndSubmitTx) as Helpers
import Data.BigInt as BigInt
import Data.Map as Map
import Effect.Exception (error)
import Test.Spec.Assertions (shouldEqual)

main :: Effect Unit
main = example testnetNamiConfig

example :: ConfigParams () -> Effect Unit
example cfg = launchAff_ do
  runContract cfg do
    logInfo' "Running Examples.PlutusV2.InlineDatum"
    validator <- checkDatumIsInlineScript
    let vhash = validatorHash validator
    logInfo' "Attempt to lock value"
    txId <- payToCheckDatumIsInline vhash
    awaitTxConfirmed txId
    logInfo' "Tx submitted successfully, Try to spend locked values"
    spendFromCheckDatumIsInline vhash validator txId

plutusData :: PlutusData
plutusData = Integer $ BigInt.fromInt 31415927

payToCheckDatumIsInline :: ValidatorHash -> Contract () TransactionHash
payToCheckDatumIsInline vhash = do
  let
    datum :: Datum
    datum = Datum plutusData

    constraints :: TxConstraints Unit Unit
    constraints =
      Constraints.mustPayToScript vhash datum
        Constraints.DatumInline
        $ Value.lovelaceValueOf
        $ BigInt.fromInt 2_000_000

    lookups :: Lookups.ScriptLookups PlutusData
    lookups = mempty

  Helpers.buildBalanceSignAndSubmitTx lookups constraints

spendFromCheckDatumIsInline
  :: ValidatorHash
  -> Validator
  -> TransactionHash
  -> Contract () Unit
spendFromCheckDatumIsInline vhash validator txId = do
  let scriptAddress = scriptHashAddress vhash Nothing
  utxos <- fromMaybe Map.empty <$> utxosAt scriptAddress
  case fst <$> find hasTransactionId (Map.toUnfoldable utxos :: Array _) of
    Just txInput -> do
      let
        redeemer :: Redeemer
        redeemer = Redeemer plutusData

        lookups :: Lookups.ScriptLookups PlutusData
        lookups = Lookups.validator validator
          <> Lookups.unspentOutputs utxos

        constraints :: TxConstraints Unit Unit
        constraints =
          Constraints.mustSpendScriptOutput txInput redeemer

      spendTxId <- Helpers.buildBalanceSignAndSubmitTx lookups constraints
      awaitTxConfirmed spendTxId
      logInfo' "Successfully spent locked values."

    _ ->
      logInfo' $ "The id "
        <> show txId
        <> " does not have output locked at: "
        <> show scriptAddress
  where
  hasTransactionId :: TransactionInput /\ _ -> Boolean
  hasTransactionId (TransactionInput tx /\ _) =
    tx.transactionId == txId

payToCheckDatumIsInlineWrong :: ValidatorHash -> Contract () TransactionHash
payToCheckDatumIsInlineWrong vhash = do
  let
    datum :: Datum
    datum = Datum plutusData

    constraints :: TxConstraints Unit Unit
    constraints =
      Constraints.mustPayToScript vhash datum
        Constraints.DatumWitness
        $ Value.lovelaceValueOf
        $ BigInt.fromInt 2_000_000

    lookups :: Lookups.ScriptLookups PlutusData
    lookups = mempty

  Helpers.buildBalanceSignAndSubmitTx lookups constraints

readFromCheckDatumIsInline
  :: ValidatorHash
  -> TransactionHash
  -> Contract () Unit
readFromCheckDatumIsInline vhash txId = do
  let scriptAddress = scriptHashAddress vhash Nothing
  utxos <- fromMaybe Map.empty <$> utxosAt scriptAddress
  case snd <$> find hasTransactionId (Map.toUnfoldable utxos :: Array _) of
    Just (TransactionOutputWithRefScript { output }) -> do
      (unwrap output).datum `shouldEqual` OutputDatum (Datum plutusData)
      logInfo' "Successfully read inline datum."

    _ ->
      logInfo' $ "The id "
        <> show txId
        <> " does not have output locked at: "
        <> show scriptAddress
  where
  hasTransactionId :: TransactionInput /\ _ -> Boolean
  hasTransactionId (TransactionInput tx /\ _) =
    tx.transactionId == txId

foreign import checkDatumIsInline :: String

checkDatumIsInlineScript :: Contract () Validator
checkDatumIsInlineScript =
  liftMaybe (error "Error decoding checkDatumIsInline") do
    envelope <- decodeTextEnvelope checkDatumIsInline
    Validator <$> plutusScriptV2FromEnvelope envelope
