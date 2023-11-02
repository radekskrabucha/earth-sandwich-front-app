import { Button } from '@/components/Button'

export const CallToActionSection = () => (
  <section className="layout-section items-center gap-8 text-center font-extrabold text-primary">
    <h2 className="font-main text-5xl max-md:text-4xl">Join Now</h2>
    <p className="max-w-md">
      Ready to time-travel through the world via sandwiches? What are you
      waiting for? The universe of sandwiches awaits!
    </p>
    <Button disabled>Sign Up</Button>
  </section>
)
