// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1830463427"] = [{"values":[{"sourceSpan":{"start":[131,1],"name":".spago/untagged-union/v0.3.0/src/Untagged/Union.purs","end":[131,53]},"score":0,"packageInfo":{"values":["untagged-union"],"tag":"Package"},"name":"fromUndefinedOr","moduleName":"Untagged.Union","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Untagged","Union"],"UndefinedOr"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[366,1],"name":"src/Types/Interval.purs","end":[366,66]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"member","moduleName":"Types.Interval","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Types","Interval"],"Interval"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Check whether a value is in an interval.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[450,1],"name":"src/Types/Interval.purs","end":[450,66]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"before","moduleName":"Types.Interval","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Types","Interval"],"Interval"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Check if a value is earlier than the beginning of an `Interval`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[454,1],"name":"src/Types/Interval.purs","end":[454,65]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"after","moduleName":"Types.Interval","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Types","Interval"],"Interval"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Check if a value is later than the end of a `Interval`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[55,1],"name":"src/Scripts.purs","end":[56,66]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"typedValidatorEnterpriseAddress","moduleName":"Scripts","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Serialization","Address"],"NetworkId"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Types","TypedValidator"],"TypedValidator"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Serialization","Address"],"Address"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Converts a Plutus-style `TypedValidator` to an `Address` as an\n`EnterpriseAddress`. This is likely what you will use since Plutus\ncurrently uses `scriptHashAddress` on non-staking addresses which is\ninvoked in `validatorAddress`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[46,1],"name":"src/Scripts.purs","end":[47,66]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"typedValidatorBaseAddress","moduleName":"Scripts","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Serialization","Address"],"NetworkId"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Types","TypedValidator"],"TypedValidator"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Serialization","Address"],"Address"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Helpers for `PlutusScript` and `ScriptHash` newtype wrappers, separate from\nthe data type definitions to prevent cylic dependencies.\nConverts a Plutus-style `TypedValidator` to an `BaseAddress`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[10,1],"name":".spago/prelude/v5.0.1/src/Record/Unsafe.purs","end":[10,70]},"score":80,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"unsafeHas","moduleName":"Record.Unsafe","info":{"values":[{"type":{"tag":"ForAll","contents":["r1",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r1"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Checks if a record has a key, using a string for the key.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[168,1],"name":".spago/optparse/v4.1.0/src/Options/Applicative/Help/Core.purs","end":[168,62]},"score":0,"packageInfo":{"values":["optparse"],"tag":"Package"},"name":"parserHelp","moduleName":"Options.Applicative.Help.Core","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Options","Applicative","Types"],"ParserPrefs"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Options","Applicative","Types"],"Parser"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Options","Applicative","Help","Types"],"ParserHelp"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Generate the help text for a program.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[191,1],"name":".spago/foreign-object/v3.0.0/src/Foreign/Object.purs","end":[191,50]},"score":9,"packageInfo":{"values":["foreign-object"],"tag":"Package"},"name":"member","moduleName":"Foreign.Object","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign","Object"],"Object"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Test whether a `String` appears as a key in a map\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[227,1],"name":".spago/strings/v5.0.0/src/Data/String/NonEmpty/Internal.purs","end":[227,83]},"score":16,"packageInfo":{"values":["strings"],"tag":"Package"},"name":"joinWith1","moduleName":"Data.String.NonEmpty.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Semigroup","Foldable"],"Foldable1"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]},{"tag":"TypeConstructor","contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Joins possibly empty strings in a non-empty container together as a new\nnon-empty string, inserting a non-empty string as a separator between them.\nThe result is guaranteed to be non-empty.\n\n```purescript\n-- array syntax is used for demonstration here, it would need to be a real `Foldable1`\njoinWith1 (NonEmptyString \", \") [\"apple\", \"banana\"] == NonEmptyString \"apple, banana\"\njoinWith1 (NonEmptyString \"/\") [\"a\", \"b\", \"\", \"c\", \"\"] == NonEmptyString \"a/b//c/\"\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[215,1],"name":".spago/strings/v5.0.0/src/Data/String/NonEmpty/Internal.purs","end":[215,83]},"score":16,"packageInfo":{"values":["strings"],"tag":"Package"},"name":"join1With","moduleName":"Data.String.NonEmpty.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Semigroup","Foldable"],"Foldable1"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeConstructor","contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]}]},{"tag":"TypeConstructor","contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Joins non-empty strings in a non-empty container together as a new\nnon-empty string, inserting a possibly empty string as separator between\nthem. The result is guaranteed to be non-empty.\n\n```purescript\n-- array syntax is used for demonstration here, it would need to be a real `Foldable1`\njoin1With \", \" [NonEmptyString \"apple\", NonEmptyString \"banana\"] == NonEmptyString \"apple, banana\"\njoin1With \"\" [NonEmptyString \"apple\", NonEmptyString \"banana\"] == NonEmptyString \"applebanana\"\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[200,1],"name":".spago/strings/v5.0.0/src/Data/String/NonEmpty/Internal.purs","end":[200,73]},"score":16,"packageInfo":{"values":["strings"],"tag":"Package"},"name":"joinWith","moduleName":"Data.String.NonEmpty.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeConstructor","contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Joins the strings in a container together as a new string, inserting the\nfirst argument as separator between them. The result is not guaranteed to\nbe non-empty.\n\n```purescript\njoinWith \", \" [NonEmptyString \"apple\", NonEmptyString \"banana\"] == \"apple, banana\"\njoinWith \", \" [] == \"\"\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[121,1],"name":".spago/ordered-collections/v2.0.2/src/Data/Set.purs","end":[121,51]},"score":5,"packageInfo":{"values":["ordered-collections"],"tag":"Package"},"name":"member","moduleName":"Data.Set","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set"],"Set"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Test if a value is a member of a set\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[108,1],"name":".spago/ordered-collections/v2.0.2/src/Data/Set/NonEmpty.purs","end":[108,59]},"score":5,"packageInfo":{"values":["ordered-collections"],"tag":"Package"},"name":"member","moduleName":"Data.Set.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set","NonEmpty"],"NonEmptySet"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Test if a value is a member of a set.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[262,1],"name":".spago/sequences/v3.0.2/src/Data/Sequence.purs","end":[262,46]},"score":0,"packageInfo":{"values":["sequences"],"tag":"Package"},"name":"inBounds","moduleName":"Data.Sequence","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Sequence"],"Seq"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"O(1). True if the given index specifies an element that exists in the\nsequence, false otherwise.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[86,1],"name":".spago/sequences/v3.0.2/src/Data/Sequence/NonEmpty.purs","end":[86,46]},"score":0,"packageInfo":{"values":["sequences"],"tag":"Package"},"name":"inBounds","moduleName":"Data.Sequence.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Sequence","NonEmpty"],"Seq"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"O(1). True if the given index specifies an element that exists in the\nsequence, false otherwise.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[39,1],"name":".spago/sequences/v3.0.2/src/Data/Sequence/Internal.purs","end":[39,59]},"score":0,"packageInfo":{"values":["sequences"],"tag":"Package"},"name":"strJoin","moduleName":"Data.Sequence.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Show"],"Show"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[255,1],"name":".spago/maybe/v5.0.0/src/Data/Maybe.purs","end":[255,41]},"score":48,"packageInfo":{"values":["maybe"],"tag":"Package"},"name":"fromMaybe","moduleName":"Data.Maybe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Takes a default value, and a `Maybe` value. If the `Maybe` value is\n`Nothing` the default value is returned, otherwise the value inside the\n`Just` is returned.\n\n``` purescript\nfromMaybe x Nothing == x\nfromMaybe x (Just y) == y\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[86,1],"name":".spago/unordered-collections/v2.1.4/src/Data/HashSet.purs","end":[86,60]},"score":0,"packageInfo":{"values":["unordered-collections"],"tag":"Package"},"name":"member","moduleName":"Data.HashSet","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Hashable"],"Hashable"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","HashSet"],"HashSet"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Test whether a value is in a set.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[783,1],"name":".spago/arrays/v6.0.1/src/Data/Array.purs","end":[783,55]},"score":17,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"intercalate","moduleName":"Data.Array","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Monoid"],"Monoid"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[421,1],"name":".spago/arrays/v6.0.1/src/Data/Array.purs","end":[421,53]},"score":17,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"notElem","moduleName":"Data.Array","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Eq"],"Eq"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns true if the array does not have the given element.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[417,1],"name":".spago/arrays/v6.0.1/src/Data/Array.purs","end":[417,50]},"score":17,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"elem","moduleName":"Data.Array","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Eq"],"Eq"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns true if the array has the given element.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[363,1],"name":".spago/arrays/v6.0.1/src/Data/Array/NonEmpty.purs","end":[363,66]},"score":17,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"intercalate","moduleName":"Data.Array.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Semigroup"],"Semigroup"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[267,1],"name":".spago/arrays/v6.0.1/src/Data/Array/NonEmpty.purs","end":[267,61]},"score":17,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"notElem","moduleName":"Data.Array.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Eq"],"Eq"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[264,1],"name":".spago/arrays/v6.0.1/src/Data/Array/NonEmpty.purs","end":[264,58]},"score":17,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"elem","moduleName":"Data.Array.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Eq"],"Eq"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[133,1],"name":".spago/medea/8b215851959aa8bbf33e6708df6bd683c89d1a5a/src/Data/AdjacencyMap.purs","end":[133,63]},"score":0,"packageInfo":{"values":["medea"],"tag":"Package"},"name":"hasVertex","moduleName":"Data.AdjacencyMap","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","AdjacencyMap"],"AdjacencyMap"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[48,1],"name":".spago/medea/8b215851959aa8bbf33e6708df6bd683c89d1a5a/src/Data/AcyclicAdjacencyMap.purs","end":[48,70]},"score":0,"packageInfo":{"values":["medea"],"tag":"Package"},"name":"hasVertex","moduleName":"Data.AcyclicAdjacencyMap","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","AcyclicAdjacencyMap"],"AcyclicAdjacencyMap"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]