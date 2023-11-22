import { RestrictedProfileWrapper } from '@/components/RestrictedProfileWrapper'
import { InternalLink } from '@/config/app'
import { CreateSandwichForm } from './components/CreateSandwichForm'

export const CreateSandwichPage = () => (
  <RestrictedProfileWrapper
    shouldBeConnected
    pushTo={InternalLink.login}
  >
    <section className="layout-section max-w-2xl items-center gap-8 text-center">
      <h3 className="font-main text-3xl font-bold capitalize text-secondary-50">
        Create sandwich
      </h3>
      <p className="text-white/75">
        Create a sandwich to share with your friends. Choose a name and invite
        your friends to join. Once everyone has joined, you can start cooking
        and show off your cooking skills to whole world!
      </p>
    </section>
    <CreateSandwichForm />
  </RestrictedProfileWrapper>
)
