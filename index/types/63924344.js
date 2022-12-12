// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["63924344"] = [{"values":[{"sourceSpan":{"start":[334,1],"name":"src/Contract/Transaction.purs","end":[338,55]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"calculateMinFee","moduleName":"Contract.Transaction","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Cardano","Types","Transaction"],"Transaction"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Plutus","Types","Transaction"],"UtxoMap"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","QueryM"],"ClientError"]}]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Plutus","Types","Value"],"Coin"]}]}}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Query the Haskell server for the minimum transaction fee.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[446,1],"name":"src/Contract/Transaction.purs","end":[450,76]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"balanceTxWithConstraints","moduleName":"Contract.Transaction","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","ScriptLookups"],"UnattachedUnbalancedTx"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","BalanceTx","Constraints"],"BalanceTxConstraintsBuilder"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","BalanceTx","Error"],"BalanceTxError"]}]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","BalanceTx","Types"],"FinalizedTransaction"]}]}}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attempts to balance an `UnattachedUnbalancedTx` using the specified\nbalancer constraints.\n"}],"tag":"SearchResult"}]