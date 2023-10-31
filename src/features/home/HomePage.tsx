import { AppName } from '@/config/app'
import Bg from '@/public/images/homepage/bg.webp'

export const HomePage = () => (
  <div
    className="layout-container flex-1 bg-[size:336px_287px] bg-center"
    style={{
      backgroundImage: `url(${Bg.src})`
    }}
  >
    <section className="layout-section h-screen flex-1 items-center justify-center gap-8">
      <h2 className="max-xs:text-3xl max-xxs:text-2xl max-xs:p-6 rounded-3xl bg-background p-14 font-main text-8xl font-bold uppercase text-primary max-xl:text-6xl max-md:p-10 max-md:text-5xl max-sm:text-4xl">
        {AppName}
      </h2>
    </section>
  </div>
)
