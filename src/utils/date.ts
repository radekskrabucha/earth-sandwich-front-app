import { format, fromUnixTime, getUnixTime } from 'date-fns'

export const getCurrentYear = () => new Date().getFullYear()

export const getDateNowISOString = () => new Date().toISOString()

export const getNowUnix = () => getUnixTime(new Date())

export const formatToDate = (timestamp: number) =>
  format(fromUnixTime(timestamp), 'dd.MM.yyyy')

export const formatToDateWithTime = (timestamp: number) =>
  format(fromUnixTime(timestamp), 'dd.MM.yyyy HH:mm')
