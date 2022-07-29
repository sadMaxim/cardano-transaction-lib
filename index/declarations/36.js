// This file was generated by purescript-docs-search.
window.DocsSearchIndex["36"] = [["~<",[{"values":[{"sourceSpan":{"start":[14,1],"name":".spago/pipes/v7.0.1/src/Pipes.purs","end":[14,34]},"score":1,"packageInfo":{"values":["pipes"],"tag":"Package"},"name":"(~<)","moduleName":"Pipes","info":{"values":[],"tag":"ValueAliasResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["~<<",[{"values":[{"sourceSpan":{"start":[126,1],"name":".spago/pipes/v7.0.1/src/Pipes/Core.purs","end":[126,40]},"score":1,"packageInfo":{"values":["pipes"],"tag":"Package"},"name":"(~<<)","moduleName":"Pipes.Core","info":{"values":[],"tag":"ValueAliasResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["|>=",[{"values":[{"sourceSpan":{"start":[90,1],"name":".spago/mmorph/v6.0.0/src/Control/Monad/Morph.purs","end":[90,26]},"score":1,"packageInfo":{"values":["mmorph"],"tag":"Package"},"name":"(|>=)","moduleName":"Control.Monad.Morph","info":{"values":[],"tag":"ValueAliasResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["txbinaryfixture1",[{"values":[{"sourceSpan":{"start":[610,1],"name":"test/Fixtures.purs","end":[610,27]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"txBinaryFixture1","moduleName":"Test.Fixtures","info":{"values":[{"type":{"tag":"TypeConstructor","contents":[["Prim"],"String"]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"To quickly check a serialized tx, create a file with the following contents:\n\n\n```\n{\n  \"type\": \"Tx AlonzoEra\",\n  \"description\": \"\",\n  \"cborHex\": ...\n}\n```\n\nAnd call `cardano-cli transaction view --tx-file ./that-file`\n"}],"tag":"SearchResult"}]],["txbinaryfixture2",[{"values":[{"sourceSpan":{"start":[617,1],"name":"test/Fixtures.purs","end":[617,27]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"txBinaryFixture2","moduleName":"Test.Fixtures","info":{"values":[{"type":{"tag":"TypeConstructor","contents":[["Prim"],"String"]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["txbinaryfixture3",[{"values":[{"sourceSpan":{"start":[625,1],"name":"test/Fixtures.purs","end":[625,27]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"txBinaryFixture3","moduleName":"Test.Fixtures","info":{"values":[{"type":{"tag":"TypeConstructor","contents":[["Prim"],"String"]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["txbinaryfixture4",[{"values":[{"sourceSpan":{"start":[633,1],"name":"test/Fixtures.purs","end":[633,27]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"txBinaryFixture4","moduleName":"Test.Fixtures","info":{"values":[{"type":{"tag":"TypeConstructor","contents":[["Prim"],"String"]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["txbody",[{"values":[{"sourceSpan":{"start":[208,1],"name":"src/Cardano/Types/Transaction.purs","end":[223,4]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"TxBody","moduleName":"Cardano.Types.Transaction","info":{"values":[{"typeArguments":[],"dataDeclType":"newtype"}],"tag":"DataResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":null,"score":200000,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"TxBody","moduleName":"Cardano.Types.Transaction","info":{"values":[{"arguments":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["inputs",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set"],"Set"]},{"tag":"TypeConstructor","contents":[["Types","Transaction"],"TransactionInput"]}]},{"tag":"RCons","contents":["outputs",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"TransactionOutput"]}]},{"tag":"RCons","contents":["fee",{"tag":"TypeConstructor","contents":[["Cardano","Types","Value"],"Coin"]},{"tag":"RCons","contents":["ttl",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Serialization","Address"],"Slot"]}]},{"tag":"RCons","contents":["certs",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"Certificate"]}]}}]},{"tag":"RCons","contents":["withdrawals",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeConstructor","contents":[["Serialization","Address"],"RewardAddress"]}]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Value"],"Coin"]}]}}]},{"tag":"RCons","contents":["update",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"Update"]}]},{"tag":"RCons","contents":["auxiliaryDataHash",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"AuxiliaryDataHash"]}]},{"tag":"RCons","contents":["validityStartInterval",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Serialization","Address"],"Slot"]}]},{"tag":"RCons","contents":["mint",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"Mint"]}]},{"tag":"RCons","contents":["scriptDataHash",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"ScriptDataHash"]}]},{"tag":"RCons","contents":["collateral",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Types","Transaction"],"TransactionInput"]}]}}]},{"tag":"RCons","contents":["requiredSigners",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"RequiredSigner"]}]}}]},{"tag":"RCons","contents":["networkId",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Serialization","Address"],"NetworkId"]}]},{"tag":"REmpty","contents":{}}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}],"tag":"DataConstructorResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["txconstraint",[{"values":[{"sourceSpan":{"start":[81,1],"name":"src/Types/TxConstraints.purs","end":[95,50]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"TxConstraint","moduleName":"Types.TxConstraints","info":{"values":[{"typeArguments":[],"dataDeclType":"data"}],"tag":"DataResult"},"hashAnchor":"t","comments":"Constraints on transactions that want to spend script outputs\n"}],"tag":"SearchResult"}]],["txconstraints",[{"values":[{"sourceSpan":{"start":[130,1],"name":"src/Types/TxConstraints.purs","end":[134,4]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"TxConstraints","moduleName":"Types.TxConstraints","info":{"values":[{"typeArguments":[["i",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}],["o",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]],"dataDeclType":"newtype"}],"tag":"DataResult"},"hashAnchor":"t","comments":"Restrictions placed on the allocation of funds to outputs of transactions.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":null,"score":200000,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"TxConstraints","moduleName":"Types.TxConstraints","info":{"values":[{"arguments":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["constraints",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Types","TxConstraints"],"TxConstraint"]}]},{"tag":"RCons","contents":["ownInputs",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Types","TxConstraints"],"InputConstraint"]},{"tag":"TypeVar","contents":"i"}]}}]},{"tag":"RCons","contents":["ownOutputs",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Types","TxConstraints"],"OutputConstraint"]},{"tag":"TypeVar","contents":"o"}]}}]},{"tag":"REmpty","contents":{}}]}]}]}]}]}],"tag":"DataConstructorResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["txevaluationr",[{"values":[{"sourceSpan":{"start":[465,1],"name":"src/QueryM/Ogmios.purs","end":[465,75]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"TxEvaluationR","moduleName":"QueryM.Ogmios","info":{"values":[{"typeArguments":[],"dataDeclType":"newtype"}],"tag":"DataResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":null,"score":200000,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"TxEvaluationR","moduleName":"QueryM.Ogmios","info":{"values":[{"arguments":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeConstructor","contents":[["QueryM","Ogmios"],"RedeemerPointer"]}]},{"tag":"TypeConstructor","contents":[["QueryM","Ogmios"],"ExecutionUnits"]}]}}]}],"tag":"DataConstructorResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["txfixture1",[{"values":[{"sourceSpan":{"start":[304,1],"name":"test/Fixtures.purs","end":[304,26]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"txFixture1","moduleName":"Test.Fixtures","info":{"values":[{"type":{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"Transaction"]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["txfixture2",[{"values":[{"sourceSpan":{"start":[335,1],"name":"test/Fixtures.purs","end":[335,26]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"txFixture2","moduleName":"Test.Fixtures","info":{"values":[{"type":{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"Transaction"]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["txfixture3",[{"values":[{"sourceSpan":{"start":[366,1],"name":"test/Fixtures.purs","end":[366,26]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"txFixture3","moduleName":"Test.Fixtures","info":{"values":[{"type":{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"Transaction"]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["txfixture4",[{"values":[{"sourceSpan":{"start":[476,1],"name":"test/Fixtures.purs","end":[476,26]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"txFixture4","moduleName":"Test.Fixtures","info":{"values":[{"type":{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"Transaction"]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["txhash",[{"values":[{"sourceSpan":{"start":[238,1],"name":"src/QueryM/Ogmios.purs","end":[238,24]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"TxHash","moduleName":"QueryM.Ogmios","info":{"values":[{"type":{"tag":"TypeConstructor","contents":[["Types","ByteArray"],"ByteArray"]},"arguments":[]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"}]],["txinputfixture1",[{"values":[{"sourceSpan":{"start":[995,1],"name":"test/Fixtures.purs","end":[995,36]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"txInputFixture1","moduleName":"Test.Fixtures","info":{"values":[{"type":{"tag":"TypeConstructor","contents":[["Types","Transaction"],"TransactionInput"]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["txinputlockederror",[{"values":[{"sourceSpan":{"start":[258,1],"name":"src/BalanceTx/BalanceTx.purs","end":[258,45]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"TxInputLockedError","moduleName":"BalanceTx","info":{"values":[{"typeArguments":[],"dataDeclType":"data"}],"tag":"DataResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":null,"score":200000,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"TxInputLockedError","moduleName":"BalanceTx","info":{"values":[{"arguments":[]}],"tag":"DataConstructorResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["txinputlockederror'",[{"values":[{"sourceSpan":null,"score":200000,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"TxInputLockedError'","moduleName":"BalanceTx","info":{"values":[{"arguments":[{"tag":"TypeConstructor","contents":[["BalanceTx"],"TxInputLockedError"]}]}],"tag":"DataConstructorResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["txoutputbinaryfixture1",[{"values":[{"sourceSpan":{"start":[233,1],"name":"test/Fixtures.purs","end":[233,33]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"txOutputBinaryFixture1","moduleName":"Test.Fixtures","info":{"values":[{"type":{"tag":"TypeConstructor","contents":[["Prim"],"String"]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["txoutputfixture1",[{"values":[{"sourceSpan":{"start":[185,1],"name":"test/Fixtures.purs","end":[185,38]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"txOutputFixture1","moduleName":"Test.Fixtures","info":{"values":[{"type":{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"TransactionOutput"]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["txoutputfixture2",[{"values":[{"sourceSpan":{"start":[207,1],"name":"test/Fixtures.purs","end":[207,38]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"txOutputFixture2","moduleName":"Test.Fixtures","info":{"values":[{"type":{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"TransactionOutput"]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["txoutrefcache",[{"values":[{"sourceSpan":{"start":[51,1],"name":"src/Types/UsedTxOuts.purs","end":[51,52]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"TxOutRefCache","moduleName":"Types.UsedTxOuts","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeConstructor","contents":[["Types","Transaction"],"TransactionHash"]}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set"],"Set"]},{"tag":"TypeConstructor","contents":[["Data","UInt"],"UInt"]}]}}]},"arguments":[]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"}]],["txoutrefnotfound",[{"values":[{"sourceSpan":null,"score":200000,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"TxOutRefNotFound","moduleName":"Types.ScriptLookups","info":{"values":[{"arguments":[{"tag":"TypeConstructor","contents":[["Types","Transaction"],"TransactionInput"]}]}],"tag":"DataConstructorResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["txoutreftotransactioninput",[{"values":[{"sourceSpan":{"start":[41,1],"name":"src/TxOutput.purs","end":[42,65]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"txOutRefToTransactionInput","moduleName":"TxOutput","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["QueryM","Ogmios"],"OgmiosTxOutRef"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Types","Transaction"],"TransactionInput"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A module for helpers of the various transaction output types.\nConverts an Ogmios transaction input to (internal) `TransactionInput`\n"}],"tag":"SearchResult"}]],["txoutrefunlockkeys",[{"values":[{"sourceSpan":{"start":[52,1],"name":"src/Types/UsedTxOuts.purs","end":[52,62]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"TxOutRefUnlockKeys","moduleName":"Types.UsedTxOuts","info":{"values":[{"typeArguments":[],"dataDeclType":"newtype"}],"tag":"DataResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":null,"score":200000,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"TxOutRefUnlockKeys","moduleName":"Types.UsedTxOuts","info":{"values":[{"arguments":[{"tag":"TypeConstructor","contents":[["Types","UsedTxOuts"],"TxOutRefCache"]}]}],"tag":"DataConstructorResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["txoutrefwrongtype",[{"values":[{"sourceSpan":null,"score":200000,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"TxOutRefWrongType","moduleName":"Types.ScriptLookups","info":{"values":[{"arguments":[{"tag":"TypeConstructor","contents":[["Types","Transaction"],"TransactionInput"]}]}],"tag":"DataConstructorResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["txwitnesssetsetplutusscripts",[{"values":[{"sourceSpan":{"start":[197,1],"name":"src/Serialization/WitnessSet.purs","end":[198,59]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"txWitnessSetSetPlutusScripts","moduleName":"Serialization.WitnessSet","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Serialization","Types"],"TransactionWitnessSet"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Serialization","Types"],"PlutusScripts"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["symbol",[{"values":[{"sourceSpan":null,"score":0,"packageInfo":{"values":[],"tag":"Builtin"},"name":"Symbol","moduleName":"Prim","info":{"values":[{"kind":{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}}],"tag":"ExternDataResult"},"hashAnchor":"t","comments":"`Symbol` is the kind of type-level strings.\n\nConstruct types of this kind using the same literal syntax as documented\nfor strings.\n"}],"tag":"SearchResult"}]],["symbols",[{"values":[{"sourceSpan":{"start":[181,1],"name":"src/Plutus/Types/Value.purs","end":[181,41]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"symbols","moduleName":"Plutus.Types.Value","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Plutus","Types","Value"],"Value"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Plutus","Types","CurrencySymbol"],"CurrencySymbol"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The list of `CurrencySymbol`s of a `Value`.\n"}],"tag":"SearchResult"}]],["symlink",[{"values":[{"sourceSpan":{"start":[122,1],"name":".spago/node-fs-aff/v7.0.0/src/Node/FS/Aff.purs","end":[125,20]},"score":1,"packageInfo":{"values":["node-fs-aff"],"tag":"Package"},"name":"symlink","moduleName":"Node.FS.Aff","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","FS"],"SymlinkType"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"\nCreates a symlink.\n\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[149,1],"name":".spago/node-fs/v6.1.0/src/Node/FS/Async.purs","end":[153,23]},"score":3,"packageInfo":{"values":["node-fs"],"tag":"Package"},"name":"symlink","moduleName":"Node.FS.Async","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","FS"],"SymlinkType"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Node","FS","Async"],"Callback"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates a symlink.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[131,1],"name":".spago/node-fs/v6.1.0/src/Node/FS/Sync.purs","end":[134,23]},"score":3,"packageInfo":{"values":["node-fs"],"tag":"Package"},"name":"symlink","moduleName":"Node.FS.Sync","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","FS"],"SymlinkType"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates a symlink.\n"}],"tag":"SearchResult"}]],["symlinktype",[{"values":[{"sourceSpan":{"start":[63,1],"name":".spago/node-fs/v6.1.0/src/Node/FS.purs","end":[63,53]},"score":3,"packageInfo":{"values":["node-fs"],"tag":"Package"},"name":"SymlinkType","moduleName":"Node.FS","info":{"values":[{"typeArguments":[],"dataDeclType":"data"}],"tag":"DataResult"},"hashAnchor":"t","comments":"Symlink varieties.\n"}],"tag":"SearchResult"}]],["symlinktypetonode",[{"values":[{"sourceSpan":{"start":[67,1],"name":".spago/node-fs/v6.1.0/src/Node/FS.purs","end":[67,43]},"score":3,"packageInfo":{"values":["node-fs"],"tag":"Package"},"name":"symlinkTypeToNode","moduleName":"Node.FS","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","FS"],"SymlinkType"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Convert a `SymlinkType` to a `String` in the format expected by the\nNode.js filesystem API.\n"}],"tag":"SearchResult"}]],["symmetricclosure",[{"values":[{"sourceSpan":{"start":[284,1],"name":".spago/medea/8b215851959aa8bbf33e6708df6bd683c89d1a5a/src/Data/AdjacencyMap.purs","end":[284,72]},"score":0,"packageInfo":{"values":["medea"],"tag":"Package"},"name":"symmetricClosure","moduleName":"Data.AdjacencyMap","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","AdjacencyMap"],"AdjacencyMap"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","AdjacencyMap"],"AdjacencyMap"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["sync",[{"values":[{"sourceSpan":null,"score":1,"packageInfo":{"values":["web-html"],"tag":"Package"},"name":"Sync","moduleName":"Web.HTML.HTMLImageElement.DecodingHint","info":{"values":[{"arguments":[]}],"tag":"DataConstructorResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["systemerror",[{"values":[{"sourceSpan":null,"score":1,"packageInfo":{"values":["exitcodes"],"tag":"Package"},"name":"SystemError","moduleName":"ExitCodes","info":{"values":[{"arguments":[]}],"tag":"DataConstructorResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["systemid",[{"values":[{"sourceSpan":{"start":[32,1],"name":".spago/web-dom/v5.0.0/src/Web/DOM/DocumentType.purs","end":[32,50]},"score":3,"packageInfo":{"values":["web-dom"],"tag":"Package"},"name":"systemId","moduleName":"Web.DOM.DocumentType","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Web","DOM","DocumentType"],"DocumentType"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["systemstart",[{"values":[{"sourceSpan":{"start":[246,1],"name":"src/QueryM/Ogmios.purs","end":[246,41]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"SystemStart","moduleName":"QueryM.Ogmios","info":{"values":[{"typeArguments":[],"dataDeclType":"newtype"}],"tag":"DataResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":null,"score":200000,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"SystemStart","moduleName":"QueryM.Ogmios","info":{"values":[{"arguments":[{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}],"tag":"DataConstructorResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],[">|>",[{"values":[{"sourceSpan":{"start":[86,1],"name":".spago/mmorph/v6.0.0/src/Control/Monad/Morph.purs","end":[86,36]},"score":1,"packageInfo":{"values":["mmorph"],"tag":"Package"},"name":"(>|>)","moduleName":"Control.Monad.Morph","info":{"values":[],"tag":"ValueAliasResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["<~",[{"values":[{"sourceSpan":{"start":[11,1],"name":".spago/pipes/v7.0.1/src/Pipes.purs","end":[11,34]},"score":1,"packageInfo":{"values":["pipes"],"tag":"Package"},"name":"(<~)","moduleName":"Pipes","info":{"values":[],"tag":"ValueAliasResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["<~<",[{"values":[{"sourceSpan":{"start":[122,1],"name":".spago/pipes/v7.0.1/src/Pipes/Core.purs","end":[122,40]},"score":1,"packageInfo":{"values":["pipes"],"tag":"Package"},"name":"(<~<)","moduleName":"Pipes.Core","info":{"values":[],"tag":"ValueAliasResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["+++",[{"values":[{"sourceSpan":{"start":[56,1],"name":".spago/profunctor/v5.0.0/src/Data/Profunctor/Choice.purs","end":[56,28]},"score":4,"packageInfo":{"values":["profunctor"],"tag":"Package"},"name":"(+++)","moduleName":"Data.Profunctor.Choice","info":{"values":[],"tag":"ValueAliasResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["$",[{"values":[{"sourceSpan":{"start":[62,1],"name":".spago/prelude/v5.0.1/src/Data/Function.purs","end":[62,20]},"score":82,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"($)","moduleName":"Data.Function","info":{"values":[],"tag":"ValueAliasResult"},"hashAnchor":"v","comments":"Applies a function to an argument: the reverse of `(#)`.\n\n```purescript\nlength $ groupBy productCategory $ filter isInStock $ products\n```\n\nis equivalent to:\n\n```purescript\nlength (groupBy productCategory (filter isInStock products))\n```\n\nOr another alternative equivalent, applying chain of composed functions to\na value:\n\n```purescript\nlength <<< groupBy productCategory <<< filter isInStock $ products\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[12,1],"name":".spago/typelevel-prelude/v6.0.0/src/Type/Function.purs","end":[12,25]},"score":4,"packageInfo":{"values":["typelevel-prelude"],"tag":"Package"},"name":"type ($)","moduleName":"Type.Function","info":{"values":[],"tag":"TypeAliasResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"}]]]