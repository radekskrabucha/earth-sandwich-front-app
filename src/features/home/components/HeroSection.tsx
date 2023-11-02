import { AppName } from '@/config/app'
import Bg from '@/public/images/homepage/bg.webp'

export const HeroSection = () => (
  <div
    className="layout-container min-h-screen flex-1 bg-[size:336px_287px] bg-center"
    style={{
      backgroundImage: `url(${Bg.src})`
    }}
  >
    <section className="layout-section flex-1 items-center justify-center gap-8">
      <h2 className="rounded-3xl bg-background px-24 py-20 font-main text-8xl font-bold uppercase text-primary max-xl:px-32 max-xl:py-24 max-xl:text-6xl max-md:p-10 max-md:text-5xl max-sm:text-4xl max-xs:p-6 max-xs:text-3xl max-xxs:text-2xl">
        {AppName}
      </h2>
    </section>
  </div>
)
