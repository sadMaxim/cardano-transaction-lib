// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["2004367363"] = [{"values":[{"sourceSpan":{"start":[52,1],"name":".spago/assert/v5.0.0/src/Test/Assert.purs","end":[56,17]},"score":39,"packageInfo":{"values":["assert"],"tag":"Package"},"name":"assertThrows'","moduleName":"Test.Assert","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Throws a runtime exception with the specified message, unless the argument\nthrows an exception when evaluated.\n\nThis function is specifically for testing unsafe pure code; for example,\nto make sure that an exception is thrown if a precondition is not\nsatisfied. Functions which use `Effect a` can be\ntested with `catchException` instead.\n"}],"tag":"SearchResult"}]