module Test.Unit (main, testPlan) where

import Prelude

import Effect (Effect)
import Effect.Aff (launchAff_)
import Test.ByteArray as ByteArray
import Test.Data as Data
import Test.Deserialization as Deserialization
import Test.Hashing as Hashing
import Test.Metadata.Seabug as Seabug
import Test.Metadata.Cip25 as Cip25
import Test.Parser as Parser
import Test.Plutus.Address as Plutus.Address
import Test.Plutus.Credential as Plutus.Credential
import Test.Plutus.Time as Plutus.Time
import Test.Plutus.Value as Plutus.Value
import Test.Serialization as Serialization
import Test.Serialization.Address as Serialization.Address
import Test.Serialization.Hash as Serialization.Hash
import Test.Transaction as Transaction
import Test.UsedTxOuts as UsedTxOuts
import Test.Utils as Utils
import TestM (TestPlanM)

-- Run with `spago test --main Test.Unit`
main :: Effect Unit
main = launchAff_ do
  Utils.interpret testPlan

testPlan :: TestPlanM Unit
testPlan = do
  ByteArray.suite
  Cip25.suite
  Data.suite
  Deserialization.suite
  Hashing.suite
  Parser.suite
  Plutus.Address.suite
  Plutus.Credential.suite
  Plutus.Time.suite
  Plutus.Value.suite
  Seabug.suite
  Serialization.suite
  Serialization.Address.suite
  Serialization.Hash.suite
  Transaction.suite
  UsedTxOuts.suite
