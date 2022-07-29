// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1468194598"] = [{"values":[{"sourceSpan":{"start":[244,1],"name":".spago/quickcheck/v7.1.0/src/Test/QuickCheck/Arbitrary.purs","end":[244,94]},"score":17,"packageInfo":{"values":["quickcheck"],"tag":"Package"},"name":"genericCoarbitrary","moduleName":"Test.QuickCheck.Arbitrary","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["rep",{"tag":"ForAll","contents":["t",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Test","QuickCheck","Arbitrary"],"Coarbitrary"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"Gen"]},{"tag":"TypeVar","contents":"t"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"Gen"]},{"tag":"TypeVar","contents":"t"}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Generic` implementation of the `coarbitrary` member from the `Coarbitrary` type class.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[88,1],"name":"src/Helpers.purs","end":[93,9]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"liftM","moduleName":"Helpers","info":{"values":[{"type":{"tag":"ForAll","contents":["e",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ForAll","contents":["m",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Error","Class"],"MonadError"],"constraintArgs":[{"tag":"TypeVar","contents":"e"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Given an error and a `Maybe` value, lift the context via `liftEither`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[68,1],"name":".spago/prelude/v5.0.1/src/Data/Functor.purs","end":[68,56]},"score":82,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"voidRight","moduleName":"Data.Functor","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Ignore the return value of a computation, using the specified return value\ninstead.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[107,1],"name":".spago/transformers/v5.2.0/src/Control/Monad/Error/Class.purs","end":[107,65]},"score":19,"packageInfo":{"values":["transformers"],"tag":"Package"},"name":"liftMaybe","moduleName":"Control.Monad.Error.Class","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["e",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Error","Class"],"MonadThrow"],"constraintArgs":[{"tag":"TypeVar","contents":"e"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Lift a `Maybe` value to a MonadThrow monad.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[47,1],"name":".spago/transformers/v5.2.0/src/Control/Comonad/Store/Class.purs","end":[47,58]},"score":19,"packageInfo":{"values":["transformers"],"tag":"Package"},"name":"seek","moduleName":"Control.Comonad.Store.Class","info":{"values":[{"type":{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["w",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Comonad","Store","Class"],"ComonadStore"],"constraintArgs":[{"tag":"TypeVar","contents":"s"},{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"w"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"w"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Reposition the focus at the specified position.\n"}],"tag":"SearchResult"}]