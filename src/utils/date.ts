import { getUnixTime } from 'date-fns'

export const getCurrentYear = () => new Date().getFullYear()

export const getDateNowISOString = () => new Date().toISOString()

export const getNowUnix = () => getUnixTime(new Date())
