
import { Core } from '@walletconnect/core'
import { WalletKit } from '@reown/walletkit'

const core = new Core({
  projectId: '0d9568fdee3722fb8b8a88fd2ace8f8b'
})

const metadata = {
  name: 'my-app',
  description: 'AppKit Example',
  url: 'https://reown.com/appkit', // origin must match your domain & subdomain
  icons: ['https://assets.reown.com/reown-profile-pic.png']
}

const walletKit = await WalletKit.init({
  core, // <- pass the shared 'core' instance
  metadata
})

function handleRedirect(session) {
  // Check if this is a native app
  const isNativeApp = session.peer.metadata.redirect !== undefined;
  
  if (isNativeApp) {
    // Redirect to native app if URL is available
    if (session.peer.metadata.redirect) {
      window.location.href = session.peer.metadata.redirect;
    } else {
      // Show "Return to App" message
      showReturnToAppMessage();
    }
  } else {
    // For web dApps, redirect back to original tab
    if (window.opener) {
      window.opener.location.href = session.peer.metadata.url;
      window.close();
    }
  }
}