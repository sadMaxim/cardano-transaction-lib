module Contract.Test.E2E
  ( module Browser
  , module Helpers
  , module WalletExt
  ) where

import Contract.Test.E2E.Browser
  ( Mode(Headless, Visible)
  , TestOptions
  , withBrowser
  , parseOptions
  ) as Browser

-- import Contract.Test.E2E.Feedback
--   ( ) as Feedback

import Contract.Test.E2E.Helpers
  ( E2EOutput
  , RunningExample
  , WalletPassword(WalletPassword)
  , delaySec
  , flintConfirmAccess
  , flintSign
  , geroConfirmAccess
  , geroSign
  , namiConfirmAccess
  , namiSign
  , withExample
  ) as Helpers

import Contract.Test.E2E.WalletExt
  ( SomeWallet(SomeWallet)
  , WalletExt(FlintExt, GeroExt, NamiExt)
  , getWalletByName
  , getWalletByType
  , walletName
  ) as WalletExt
