import { AppName } from '@/config/app'

export const HomePage = () => (
  <section className="layout-section items-start gap-8">
    <h1 className="font-main text-6xl font-extrabold max-sm:text-3xl">
      <span className="text-secondary">{AppName}</span> front app
    </h1>
  </section>
)
