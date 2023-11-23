import { millisecondsToSeconds } from 'date-fns'
import { useEffect, useRef, useState } from 'react'

type GeolocationState = {
  loading: boolean
  error: GeolocationPositionError | null
  timestamp: number | null
  latitude: number | null
  longitude: number | null
}

export function useGeolocation(options?: PositionOptions) {
  const [state, setState] = useState<GeolocationState>({
    loading: true,
    error: null,
    timestamp: null,
    latitude: null,
    longitude: null
  })

  const optionsRef = useRef(options)

  useEffect(() => {
    const onEvent: PositionCallback = ({
      coords,
      timestamp
    }: GeolocationPosition) => {
      setState({
        loading: false,
        timestamp: millisecondsToSeconds(timestamp),
        latitude: coords.latitude,
        longitude: coords.longitude,
        error: null
      })
    }

    const onEventError: PositionErrorCallback = error => {
      setState(prevState => ({
        ...prevState,
        loading: false,
        error
      }))
    }

    navigator.geolocation.getCurrentPosition(
      onEvent,
      onEventError,
      optionsRef.current
    )

    const watchId = navigator.geolocation.watchPosition(
      onEvent,
      onEventError,
      optionsRef.current
    )

    return () => {
      navigator.geolocation.clearWatch(watchId)
    }
  }, [])

  return state
}
