import { FEATURES } from '../constants'
import { Feature } from './Feature'

export const FeaturesSection = () => (
  <section className="layout-section gap-14">
    {FEATURES.map(feature => (
      <Feature
        key={feature.id}
        {...feature}
      />
    ))}
  </section>
)
