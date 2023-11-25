'use client'

import { useEffect, useRef } from 'react'
import Globe, { type GlobeMethods } from 'react-globe.gl'
import type { Location } from '@/models/sandwich'

const imageUrl = '/images/sandwich/world-map-dot-white.png'

type SandwichGlobeProps = {
  locations: Array<Location>
}

export const SandwichGlobe: React.FC<SandwichGlobeProps> = ({ locations }) => {
  const globeRef = useRef<GlobeMethods>()

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true
      globeRef.current.controls().autoRotateSpeed = 0.5
    }
  }, [])

  return (
    <section className="layout-section items-center justify-center">
      <Globe
        ref={globeRef}
        width={600}
        height={600}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl={imageUrl}
        rendererConfig={{ preserveDrawingBuffer: true }}
        atmosphereColor="#F7B801"
        pointsData={locations}
        pointLat="lat"
        pointLng="long"
        pointColor={() => '#F7B801'}
        pointAltitude={0}
        pointRadius={0.5}
      />
    </section>
  )
}
