-- | A module that defines the different Utxo `Data.Map`s from transaction
-- | input to transaction output. Furthermore, a helper to get the utxos at
-- | a given `Address` is defined.
module Contract.Utxos
  ( utxosAt
  , module Transaction
  ) where

import Prelude
import Contract.Monad (Contract, wrapContract, liftContractM)
import Data.Maybe (Maybe(Just, Nothing), maybe)
import QueryM.Utxos (utxosAt) as Utxos
import Plutus.ToPlutusType (toPlutusType)
import Plutus.Types.Address (Address)
import Plutus.Types.Transaction (UtxoM(UtxoM)) as Transaction
import Plutus.FromPlutusType (fromPlutusType)

-- | This module defines query functionality via Ogmios to get utxos.

-- | Gets utxos at an (internal) `Address` in terms of a Plutus Address`.
-- | Results may vary depending on `Wallet` type. See `QueryM` for more details
-- | on wallet variance.
utxosAt
  :: forall (r :: Row Type). Address -> Contract r (Maybe Transaction.UtxoM)
utxosAt address = do
  plutusAddr <- liftContractM "utxosAt: unable to serialize address"
    (fromPlutusType address)
  -- Don't error if we get `Nothing` as the Cardano utxos
  mCardanoUtxos <- wrapContract $ Utxos.utxosAt plutusAddr
  maybe (pure Nothing)
    ( map Just <<< liftContractM "utxosAt: unable to deserialize utxos" <<<
        toPlutusType
    )
    mCardanoUtxos