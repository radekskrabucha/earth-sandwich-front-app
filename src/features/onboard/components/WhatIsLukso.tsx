import { Button } from '@/components/Button'
import { Link } from '@/components/Link'
import { ExternalLink } from '@/config/app'
import type { Wallet } from '@/hooks/useConnectWallet'
import { ConnectWallet } from './ConnectWallet'

type WhatIsLuksoProps = {
  injectedWallet: Wallet
  isLoading: boolean
}

export const WhatIsLukso: React.FC<WhatIsLuksoProps> = ({
  injectedWallet,
  isLoading
}) => (
  <section className="layout-section items-center gap-16 text-center">
    <div className="flex flex-col items-center gap-8">
      <h2 className="font-main text-4xl font-bold text-primary">
        Welcome to EarthSandwich on Lukso!
      </h2>
      <p className="max-w-xl">
        <Button
          asChild
          variant="link"
          className="inline-block"
        >
          <Link href={ExternalLink.lukso}>Lukso</Link>
        </Button>{' '}
        is a blockchain network dedicated to the new digital lifestyle. It
        provides a decentralized innovation environment in which creative minds
        can develop and test new applications for the future of digital
        interaction.
      </p>
    </div>

    <div className="flex flex-col items-center gap-6">
      <h2 className="font-main text-3xl text-secondary">
        Getting Started with UP (Universal Profile) Browser Extension
      </h2>
      <p className="max-w-xl">
        To fully experience EarthSandwich, you'll need the UP browser extension.
        It's your gateway to managing digital assets and identities on Lukso.
        <Button
          asChild
          variant="link"
          className="text-primary"
        >
          <Link href={ExternalLink.downloadUP}>Download UP Extension</Link>
        </Button>
      </p>
    </div>

    <div className="flex flex-col items-center gap-6">
      <h2 className="font-main text-3xl text-secondary">Why UP?</h2>
      <p className="max-w-xl leading-loose">
        Secure and manage your digital identity.
        <br />
        Seamlessly interact with Lukso-based applications.
        <br />
        Own and control your digital assets and data.
      </p>
    </div>
    <div className="flex flex-col items-center gap-6">
      <h2 className="font-main text-3xl text-secondary">Connect Your Wallet</h2>
      <p className="max-w-xl">
        Ready to dive in? Click the button below to connect your UP wallet and
        start your journey.
      </p>
      <ConnectWallet
        injectedWallet={injectedWallet}
        isLoading={isLoading}
      />
    </div>
  </section>
)
