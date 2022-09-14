// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1835081032"] = [{"values":[{"sourceSpan":{"start":[197,1],"name":"test/Utils.purs","end":[204,30]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"aesonRoundTrip","moduleName":"Test.Utils","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Eq"],"Eq"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Show"],"Show"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Aeson"],"DecodeAeson"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Aeson"],"EncodeAeson"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"TypeVar","contents":"a"}]}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[166,1],"name":"test/Plutip/UtxoDistribution.purs","end":[167,58]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"assertUtxosAtPlutipWalletAddress","moduleName":"Test.Plutip.UtxoDistribution","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Wallet","Key"],"KeyWallet"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"For a plutip test wallet, assert that any utxos held by the\nwallet are at the expected address. If the wallet has a stake\nkey, this function assumes the expected address is the base\naddress, otherwise it assumes the expected address is the\nenterprise address.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[172,1],"name":"test/Plutip/UtxoDistribution.purs","end":[173,58]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"assertNoUtxosAtEnterpriseAddress","moduleName":"Test.Plutip.UtxoDistribution","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Wallet","Key"],"KeyWallet"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[181,1],"name":"test/Plutip/UtxoDistribution.purs","end":[181,77]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"assertNoUtxosAtAddress","moduleName":"Test.Plutip.UtxoDistribution","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Plutus","Types","Address"],"Address"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[245,1],"name":".spago/optparse/v4.1.0/src/Options/Applicative/Builder.purs","end":[245,56]},"score":0,"packageInfo":{"values":["optparse"],"tag":"Package"},"name":"commandGroup","moduleName":"Options.Applicative.Builder","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Options","Applicative","Builder","Internal"],"Mod"]},{"tag":"TypeConstructor","contents":[["Options","Applicative","Builder","Internal"],"CommandFields"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Add a description to a group of commands.\n\nAdvanced feature for separating logical groups of commands on the parse line.\n\nIf using the same `metavar` for each group of commands, it may yield a more\nattractive usage text combined with `hidden` for some groups.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[195,1],"name":".spago/optparse/v4.1.0/src/Options/Applicative/Builder.purs","end":[195,57]},"score":0,"packageInfo":{"values":["optparse"],"tag":"Package"},"name":"noArgError","moduleName":"Options.Applicative.Builder","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Options","Applicative","Types"],"ParseError"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Options","Applicative","Builder","Internal"],"Mod"]},{"tag":"TypeConstructor","contents":[["Options","Applicative","Builder","Internal"],"OptionFields"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Specify the error to display when no argument is provided to this option.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[144,1],"name":".spago/foreign/v6.0.1/src/Foreign.purs","end":[144,52]},"score":9,"packageInfo":{"values":["foreign"],"tag":"Package"},"name":"readInt","moduleName":"Foreign","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Foreign"],"Foreign"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign"],"FT"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attempt to coerce a foreign value to an `Int`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[140,1],"name":".spago/foreign/v6.0.1/src/Foreign.purs","end":[140,58]},"score":9,"packageInfo":{"values":["foreign"],"tag":"Package"},"name":"readNumber","moduleName":"Foreign","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Foreign"],"Foreign"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign"],"FT"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Number"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attempt to coerce a foreign value to a `Number`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[136,1],"name":".spago/foreign/v6.0.1/src/Foreign.purs","end":[136,60]},"score":9,"packageInfo":{"values":["foreign"],"tag":"Package"},"name":"readBoolean","moduleName":"Foreign","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Foreign"],"Foreign"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign"],"FT"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attempt to coerce a foreign value to a `Boolean`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[129,1],"name":".spago/foreign/v6.0.1/src/Foreign.purs","end":[129,54]},"score":9,"packageInfo":{"values":["foreign"],"tag":"Package"},"name":"readChar","moduleName":"Foreign","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Foreign"],"Foreign"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign"],"FT"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Char"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attempt to coerce a foreign value to a `Char`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[125,1],"name":".spago/foreign/v6.0.1/src/Foreign.purs","end":[125,58]},"score":9,"packageInfo":{"values":["foreign"],"tag":"Package"},"name":"readString","moduleName":"Foreign","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Foreign"],"Foreign"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign"],"FT"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attempt to coerce a foreign value to a `String`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[70,1],"name":"examples/Helpers.purs","end":[70,70]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"mkTokenName","moduleName":"Examples.Helpers","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["Types","TokenName"],"TokenName"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[215,1],"name":"src/Deserialization/Transaction.purs","end":[216,62]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"deserializeTransaction","moduleName":"Deserialization.Transaction","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Types","CborBytes"],"CborBytes"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Deserialization","Error"],"Err"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"Transaction"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Deserializes CBOR encoded transaction to a CTL's native type.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[319,1],"name":"src/Deserialization/Transaction.purs","end":[319,70]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"convertUpdate","moduleName":"Deserialization.Transaction","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Serialization","Types"],"Update"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Deserialization","Error"],"Err"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"Update"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[237,1],"name":"src/Deserialization/Transaction.purs","end":[237,79]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"convertTxBody","moduleName":"Deserialization.Transaction","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Serialization","Types"],"TransactionBody"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Deserialization","Error"],"Err"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"TxBody"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Converts transaction body from foreign CSL representation to CTL's one.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[221,1],"name":"src/Deserialization/Transaction.purs","end":[222,68]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"convertTransaction","moduleName":"Deserialization.Transaction","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Serialization","Types"],"Transaction"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Deserialization","Error"],"Err"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"Transaction"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Converts transaction from foreign CSL representation to CTL's one.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[465,1],"name":"src/Deserialization/Transaction.purs","end":[468,33]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"convertProtocolParamUpdate","moduleName":"Deserialization.Transaction","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Serialization","Types"],"ProtocolParamUpdate"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Deserialization","Error"],"Err"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"ProtocolParamUpdate"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[563,1],"name":"src/Deserialization/Transaction.purs","end":[566,38]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"convertGeneralTransactionMetadata","moduleName":"Deserialization.Transaction","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Serialization","Types"],"GeneralTransactionMetadata"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Deserialization","Error"],"Err"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["Types","TransactionMetadata"],"GeneralTransactionMetadata"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[527,1],"name":"src/Deserialization/Transaction.purs","end":[530,22]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"convertCostModels","moduleName":"Deserialization.Transaction","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Serialization","Types"],"Costmdls"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Deserialization","Error"],"Err"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"Costmdls"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[335,1],"name":"src/Deserialization/Transaction.purs","end":[336,68]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"convertCertificate","moduleName":"Deserialization.Transaction","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Serialization","Types"],"Certificate"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Deserialization","Error"],"Err"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"Certificate"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[552,1],"name":"src/Deserialization/Transaction.purs","end":[553,72]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"convertAuxiliaryData","moduleName":"Deserialization.Transaction","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Serialization","Types"],"AuxiliaryData"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Deserialization","Error"],"Err"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"AuxiliaryData"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[29,3],"name":".spago/argonaut-codecs/v8.1.0/src/Data/Argonaut/Decode/Class.purs","end":[29,49]},"score":2,"packageInfo":{"values":["argonaut-codecs"],"tag":"Package"},"name":"decodeJson","moduleName":"Data.Argonaut.Decode.Class","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","Argonaut","Decode","Class"],"DecodeJson"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Argonaut","Decode","Class"],"DecodeJson"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[271,1],"name":"src/Contract/Transaction.purs","end":[274,32]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"submit","moduleName":"Contract.Transaction","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Contract","Transaction"],"BalancedSignedTransaction"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["Types","Transaction"],"TransactionHash"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Submits a `BalancedSignedTransaction`, which is the output of\n`signTransaction` or `balanceAndSignTx`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[585,1],"name":"src/Contract/Transaction.purs","end":[588,21]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"awaitTxConfirmed","moduleName":"Contract.Transaction","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Types","Transaction"],"TransactionHash"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Wait until a transaction with given hash is confirmed.\nUse `awaitTxConfirmedWithTimeout` if you want to limit the time of waiting.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[36,1],"name":"src/Contract/Chain.purs","end":[36,70]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"waitNSlots","moduleName":"Contract.Chain","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Types","Natural"],"Natural"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["Types","Chain"],"Tip"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[33,1],"name":"src/Contract/Chain.purs","end":[33,70]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"waitUntilSlot","moduleName":"Contract.Chain","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Serialization","Address"],"Slot"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["Types","Chain"],"Tip"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[173,1],"name":"src/Contract/Address.purs","end":[173,78]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"addressToBech32","moduleName":"Contract.Address","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Plutus","Types","Address"],"Address"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["Types","Aliases"],"Bech32String"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Convert `Address` to `Bech32String`, using current `NetworkId` provided by\n`Contract` configuration to determine the network tag.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[125,3],"name":"src/Cardano/Types/Value.purs","end":[125,23]},"score":200000,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"split","moduleName":"Cardano.Types.Value","info":{"values":[{"typeClassArguments":[["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]],"typeClass":[["Cardano","Types","Value"],"Split"],"type":{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Cardano","Types","Value"],"Split"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Tuple","Nested"],"/\\"]},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[475,1],"name":".spago/aeson/8e9d42980e824450c18c397295573160d1ce8424/src/Aeson.purs","end":[476,77]},"score":0,"packageInfo":{"values":["aeson"],"tag":"Package"},"name":"decodeJsonString","moduleName":"Aeson","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Aeson"],"DecodeAeson"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Decodes a value encoded as JSON via Aeson decoding algorithm.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[470,1],"name":".spago/aeson/8e9d42980e824450c18c397295573160d1ce8424/src/Aeson.purs","end":[471,75]},"score":0,"packageInfo":{"values":["aeson"],"tag":"Package"},"name":"decodeAesonViaJson","moduleName":"Aeson","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Argonaut","Decode","Class"],"DecodeJson"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Aeson"],"Aeson"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Ignore numeric index and reuse Argonaut decoder.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[158,3],"name":".spago/aeson/8e9d42980e824450c18c397295573160d1ce8424/src/Aeson.purs","end":[158,51]},"score":0,"packageInfo":{"values":["aeson"],"tag":"Package"},"name":"decodeAeson","moduleName":"Aeson","info":{"values":[{"typeClassArguments":[["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]],"typeClass":[["Aeson"],"DecodeAeson"],"type":{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Aeson"],"DecodeAeson"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Aeson"],"Aeson"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]