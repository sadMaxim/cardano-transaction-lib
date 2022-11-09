-- | This module demonstrates how the `Contract` interface can be used to build,
-- | balance, and submit transactions. It creates two transactions: one that
-- | mints a token and one that sends that token to the owner's address.

module Ctl.Examples.SendsToken (main, example, contract) where

import Contract.Prelude

import Contract.Address (ownPaymentPubKeyHash, ownStakePubKeyHash)
import Contract.Config (ConfigParams, testnetNamiConfig)
import Contract.Log (logInfo')
import Contract.Monad (Contract, launchAff_, runContract)
import Contract.ScriptLookups as Lookups
import Contract.Scripts (MintingPolicy)
import Contract.Transaction (TransactionHash, awaitTxConfirmed)
import Contract.TxConstraints as Constraints
import Contract.Value (Value)
import Contract.Value as Value
import Ctl.Examples.AlwaysMints (alwaysMintsPolicy)
import Ctl.Examples.Helpers
  ( buildBalanceSignAndSubmitTx
  , mkCurrencySymbol
  , mkTokenName
  , mustPayToPubKeyStakeAddress
  ) as Helpers

main :: Effect Unit
main = example testnetNamiConfig

example :: ConfigParams () -> Effect Unit
example cfg = launchAff_ do
  runContract cfg contract

contract :: Contract () Unit
contract = do
  logInfo' "Running Examples.SendsToken"

  mintToken >>= awaitTxConfirmed
  logInfo' "Tx submitted successfully, Sending token to own address"

  sendToken >>= awaitTxConfirmed
  logInfo' "Tx submitted successfully!"

mintToken :: Contract () TransactionHash
mintToken = do
  mp /\ value <- tokenValue
  let
    constraints :: Constraints.TxConstraints Void Void
    constraints = Constraints.mustMintValue value

    lookups :: Lookups.ScriptLookups Void
    lookups = Lookups.mintingPolicy mp

  Helpers.buildBalanceSignAndSubmitTx lookups constraints

sendToken :: Contract () TransactionHash
sendToken = do
  pkh <- liftedHead "Failed to get own PKH" ownPaymentPubKeyHash
  skh <- maybeArrayHead <$> ownStakePubKeyHash
  _ /\ value <- tokenValue
  let
    constraints :: Constraints.TxConstraints Void Void
    constraints = Helpers.mustPayToPubKeyStakeAddress pkh skh value

    lookups :: Lookups.ScriptLookups Void
    lookups = mempty

  Helpers.buildBalanceSignAndSubmitTx lookups constraints

tokenValue :: Contract () (MintingPolicy /\ Value)
tokenValue = do
  mp /\ cs <- Helpers.mkCurrencySymbol alwaysMintsPolicy
  tn <- Helpers.mkTokenName "TheToken"
  pure $ mp /\ Value.singleton cs tn one
