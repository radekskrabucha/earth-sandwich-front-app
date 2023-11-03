import { AppName } from '@/config/app'
import Bg from '@/public/images/homepage/bg-pattern.svg'

export const HeroSection = () => (
  <div
    className="layout-container min-h-screen flex-1 bg-[size:340px_340px] bg-center"
    style={{
      backgroundImage: `url(${Bg.src})`
    }}
  >
    <section className="layout-section flex-1 items-center justify-center gap-8">
      <div className="flex h-80 flex-col items-center justify-center gap-8 bg-background px-32 max-md:h-40 max-xs:h-32">
        <h2 className="font-main text-8xl font-bold uppercase text-primary max-xl:text-6xl max-md:text-5xl max-sm:text-4xl max-xs:text-3xl max-xxs:text-2xl">
          {AppName}
        </h2>
      </div>
    </section>
  </div>
)
