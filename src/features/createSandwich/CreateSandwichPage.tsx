import { RestrictedProfileWrapper } from '@/components/RestrictedProfileWrapper'
import { InternalLink } from '@/config/app'
import { CreateSandwichForm } from './components/CreateSandwichForm'

export const CreateSandwichPage = () => (
  <RestrictedProfileWrapper
    shouldBeConnected
    pushTo={InternalLink.login}
  >
    <section className="layout-section">
      <h1 className="text-3xl font-bold">Create Sandwich</h1>
    </section>
    <CreateSandwichForm />
  </RestrictedProfileWrapper>
)
