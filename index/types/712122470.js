// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["712122470"] = [{"values":[{"sourceSpan":{"start":[600,1],"name":"src/Types/ScriptLookups.purs","end":[607,54]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"mkUnbalancedTx'","moduleName":"Types.ScriptLookups","info":{"values":[{"type":{"tag":"ForAll","contents":["validator",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ForAll","contents":["datum",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ForAll","contents":["redeemer",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Types","TypedValidator"],"ValidatorTypes"],"constraintArgs":[{"tag":"TypeVar","contents":"validator"},{"tag":"TypeVar","contents":"datum"},{"tag":"TypeVar","contents":"redeemer"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["IsData"],"IsData"],"constraintArgs":[{"tag":"TypeVar","contents":"datum"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["IsData"],"IsData"],"constraintArgs":[{"tag":"TypeVar","contents":"redeemer"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Types","ScriptLookups"],"ScriptLookups"]},{"tag":"TypeVar","contents":"validator"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Types","TxConstraints"],"TxConstraints"]},{"tag":"TypeVar","contents":"redeemer"}]},{"tag":"TypeVar","contents":"datum"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["QueryM"],"QueryM"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Types","ScriptLookups"],"MkUnbalancedTxError"]}]},{"tag":"TypeConstructor","contents":[["Types","UnbalancedTransaction"],"UnbalancedTx"]}]}}]}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create an `UnbalancedTx` given `ScriptLookups` and `TxConstraints`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[638,1],"name":"src/Types/ScriptLookups.purs","end":[645,64]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"mkUnbalancedTx","moduleName":"Types.ScriptLookups","info":{"values":[{"type":{"tag":"ForAll","contents":["validator",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ForAll","contents":["datum",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ForAll","contents":["redeemer",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Types","TypedValidator"],"ValidatorTypes"],"constraintArgs":[{"tag":"TypeVar","contents":"validator"},{"tag":"TypeVar","contents":"datum"},{"tag":"TypeVar","contents":"redeemer"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["IsData"],"IsData"],"constraintArgs":[{"tag":"TypeVar","contents":"datum"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["IsData"],"IsData"],"constraintArgs":[{"tag":"TypeVar","contents":"redeemer"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Types","ScriptLookups"],"ScriptLookups"]},{"tag":"TypeVar","contents":"validator"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Types","TxConstraints"],"TxConstraints"]},{"tag":"TypeVar","contents":"redeemer"}]},{"tag":"TypeVar","contents":"datum"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["QueryM"],"QueryM"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Types","ScriptLookups"],"MkUnbalancedTxError"]}]},{"tag":"TypeConstructor","contents":[["Types","ScriptLookups"],"UnattachedUnbalancedTx"]}]}}]}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"An implementation that strips `witnessSet` and data hash from\nreturned `UnbalancedTx` in order to calculate them later on server.\nIt returns part of the `ConstraintProcessingState` for later consumption by\nthe server. The `Spend` redeemers will require reindexing and all hardcoded\nto `zero` from this function.\n"}],"tag":"SearchResult"}]