module Ctl.Internal.Helpers
  ( (</>)
  , (<<>>)
  , (<\>)
  , appendFirstMaybe
  , appendLastMaybe
  , appendMap
  , appendRightMap
  , bigIntToUInt
  , filterMapM
  , filterMapWithKeyM
  , for2
  , fromJustEff
  , fromRightEff
  , liftEither
  , liftM
  , liftMWith
  , liftedM
  , logString
  , logWithLevel
  , maybeArrayMerge
  , mkErrorRecord
  , notImplemented
  , showWithParens
  , traverse2
  , uIntToBigInt
  , encodeMap
  , encodeSet
  , encodeTagged'
  ) where

import Prelude

import Aeson (class EncodeAeson, Aeson, encodeAeson)
import Aeson.Encode (dictionary, encodeTagged)
import Control.Monad.Error.Class (class MonadError, throwError)
import Data.Array (union)
import Data.BigInt (BigInt)
import Data.BigInt as BigInt
import Data.Either (Either(Right), either)
import Data.Function (on)
import Data.JSDate (now)
import Data.List.Lazy as LL
import Data.Log.Formatter.Pretty (prettyFormatter)
import Data.Log.Level (LogLevel)
import Data.Log.Message (Message)
import Data.Map (Map)
import Data.Map as Map
import Data.Maybe (Maybe(Just, Nothing), fromJust, maybe)
import Data.Maybe.First (First(First))
import Data.Maybe.Last (Last(Last))
import Data.Newtype (unwrap)
import Data.Op (Op(Op))
import Data.Set (Set)
import Data.Set (toUnfoldable) as Set
import Data.Traversable (class Traversable, sequence, traverse)
import Data.Tuple (snd, uncurry)
import Data.Typelevel.Undefined (undefined)
import Data.UInt (UInt)
import Data.UInt as UInt
import Effect (Effect)
import Effect.Class (class MonadEffect)
import Effect.Class.Console (log)
import Effect.Exception (throw)
import Partial.Unsafe (unsafePartial)
import Prim.TypeError (class Warn, Text)

-- | Throws provided error on `Nothing`
fromJustEff :: forall (a :: Type). String -> Maybe a -> Effect a
fromJustEff e = case _ of
  Nothing -> throw e
  Just x -> pure x

liftEither
  :: forall (a :: Type) (e :: Type) (m :: Type -> Type)
   . MonadError e m
  => Either e a
  -> m a
liftEither = either throwError pure

fromRightEff :: forall (a :: Type) (e :: Type). Show e => Either e a -> Effect a
fromRightEff = either (throw <<< show) pure

-- | Given an error and a lifted `Maybe` value.
liftedM
  :: forall (e :: Type) (m :: Type -> Type) (a :: Type)
   . MonadError e m
  => e
  -> m (Maybe a)
  -> m a
liftedM err mma = mma >>= maybe (throwError err) Right >>> liftEither

-- | Given an error and a `Maybe` value, lift the context via `liftEither`.
liftM
  :: forall (e :: Type) (m :: Type -> Type) (a :: Type)
   . MonadError e m
  => e
  -> Maybe a
  -> m a
liftM err = liftEither <<< maybe (throwError err) Right

-- | Given an error and a `Maybe` value, lift the context via `liftEither` with
-- | a handler on `Right`.
liftMWith
  :: forall (e :: Type) (m :: Type -> Type) (a :: Type) (b :: Type)
   . MonadError e m
  => e
  -> (a -> b)
  -> Maybe a
  -> m b
liftMWith err f = liftEither <<< maybe (throwError err) (Right <<< f)

-- | Combine two `Maybe`s taking the `First` `Maybe`
appendFirstMaybe :: forall (a :: Type). Maybe a -> Maybe a -> Maybe a
appendFirstMaybe m m' = on (<>) First m m' # \(First m'') -> m''

infixr 5 appendFirstMaybe as <\>

-- | Combine two `Maybe`s taking the `Last` `Maybe`
appendLastMaybe :: forall (a :: Type). Maybe a -> Maybe a -> Maybe a
appendLastMaybe m m' = on (<>) Last m m' # \(Last m'') -> m''

infixr 5 appendLastMaybe as </>

-- | Combine two `Maybe` `Array`'s where `Nothing` and the empty `Array` both
-- | act as an identity
maybeArrayMerge
  :: forall (a :: Type)
   . Eq a
  => Maybe (Array a)
  -> Maybe (Array a)
  -> Maybe (Array a)
maybeArrayMerge Nothing y = y
maybeArrayMerge x Nothing = x
maybeArrayMerge (Just x) (Just y) = Just $ union x y

infixr 5 maybeArrayMerge as <<>>

-- | Provide an append for Maps where the value has as `Semigroup` instance
appendMap
  :: forall (k :: Type) (v :: Type)
   . Ord k
  => Semigroup v
  => Map k v
  -> Map k v
  -> Map k v
appendMap = Map.unionWith (<>)

-- | Provide an append for `Map`s with right bias
appendRightMap
  :: forall (k :: Type) (v :: Type)
   . Ord k
  => Map k v
  -> Map k v
  -> Map k v
appendRightMap = Map.unionWith (flip const)

-- | Filters a map on a Monadic context over a lifted predicate on both the
-- | map's key and value
filterMapWithKeyM
  :: forall (m :: Type -> Type) (k :: Type) (v :: Type)
   . Ord k
  => Monad m
  => (k -> v -> m Boolean)
  -> Map k v
  -> m (Map k v)
filterMapWithKeyM p =
  map Map.fromFoldable <<< LL.filterM (uncurry p) <<< Map.toUnfoldable

-- | Filters a map on a Monadic context over a lifted predicate on the map's
-- | value
filterMapM
  :: forall (m :: Type -> Type) (k :: Type) (v :: Type)
   . Ord k
  => Monad m
  => (v -> m Boolean)
  -> Map k v
  -> m (Map k v)
filterMapM p =
  map Map.fromFoldable <<< LL.filterM (p <<< snd) <<< Map.toUnfoldable

-- UInt.toInt is unsafe so we'll go via String. BigInt.fromString returns a
-- Maybe but we should be safe if we go from UInt originally via String,
-- as this UInt can't be larger than BigInt.
-- | Converts an `UInt` to `BigInt`
uIntToBigInt :: UInt -> BigInt
uIntToBigInt = unsafePartial fromJust <<< BigInt.fromString <<< UInt.toString

-- This should be left allowed to fail as BigInt may exceed UInt
-- | Converts a `BigInt` to `UInt` with potential failure.
bigIntToUInt :: BigInt -> Maybe UInt
bigIntToUInt = UInt.fromString <<< BigInt.toString

notImplemented :: forall a. Warn (Text "Function not implemented!") => a
notImplemented = undefined

-- | Log a message by printing it to the console, depending on the provided
-- | `LogLevel`
logWithLevel
  :: forall (m :: Type -> Type). MonadEffect m => LogLevel -> Message -> m Unit
logWithLevel lvl msg = when (msg.level >= lvl) $ log =<< prettyFormatter msg

-- | Log a message from the JS side of the FFI boundary. The first `LogLevel`
-- | argument represents the configured log level (e.g. within `QueryConfig`).
-- | The second argument is the level for this particular message
logString :: LogLevel -> LogLevel -> String -> Effect Unit
logString cfgLevel level message = do
  timestamp <- now
  logWithLevel cfgLevel { timestamp, message, level, tags: Map.empty }

-- | Used for `EncodeAeson` for datatype errors
mkErrorRecord
  :: forall (a :: Type)
   . String -- Error type
  -> String -- Error
  -> a
  -> { "errorType" :: String
     , "error" :: String
     , "args" :: a
     }
mkErrorRecord errorType error a =
  { "errorType": errorType, "error": error, "args": a }

-- | Provides `Show` instances for Newtypes that do not have inner parenthesis,
-- | e.g. `BigInt`. We could optionally use a `Newtype` constraint for
-- | unwrapping, but we don't constrain ourselves by deconstructing the wrapper.
showWithParens
  :: forall (a :: Type)
   . Show a
  => String
  -> a -- the inner type.
  -> String
showWithParens ctorName x = "(" <> ctorName <> " (" <> show x <> "))"

-- | Makes it possible to traverse with a function of type `a -> Aff (Maybe b)` 
-- | more conveniently
traverse2
  :: forall (f :: Type -> Type) (g :: Type -> Type) (t :: Type -> Type)
       (a :: Type) (b :: Type)
   . Traversable t
  => Applicative f
  => Applicative g
  => (a -> f (g b))
  -> t a
  -> f (g (t b))
traverse2 f t = sequence <$> (traverse f t)

-- | Like `traverse2` but with arguments flipped
for2
  :: forall (f :: Type -> Type) (g :: Type -> Type) (t :: Type -> Type)
       (a :: Type) (b :: Type)
   . Traversable t
  => Applicative f
  => Applicative g
  => t a
  -> (a -> f (g b))
  -> f (g (t b))
for2 = flip traverse2

-- | A wrapper around the `dictionary` function from `Aeson.Encode`
-- | that uses `encodeAeson` for encoding keys and values.
encodeMap
  :: forall (k :: Type) (v :: Type)
   . EncodeAeson k
  => EncodeAeson v
  => Map k v
  -> Aeson
encodeMap = unwrap $ dictionary (Op encodeAeson) (Op encodeAeson)

-- | A wrapper around `encodeTagged` function from `Aeson.Encode` that uses
-- | `encodeAeson` for encoding the passed value
encodeTagged' :: forall (a :: Type). EncodeAeson a => String -> a -> Aeson
encodeTagged' str x = encodeTagged str x (Op encodeAeson)

encodeSet :: forall (a :: Type). EncodeAeson a => Set a -> Aeson
encodeSet set = encodeAeson (Set.toUnfoldable set :: Array a)
