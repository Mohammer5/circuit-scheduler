export const formatMilliseconds = (
  ms,
  {
    showMinutes,
    showHours,
    showLetter = true,
  } = {}
) => {
  const msInSeconds = Math.floor(ms / 1000)

  const totalHours = Math.floor(msInSeconds / 60 / 60)
  const hours = `${totalHours < 10 ? '0' : ''}${totalHours}`

  const totalMinutes = Math.floor(msInSeconds / 60)
  const minutes = `${totalMinutes < 10 ? '0' : ''}${totalMinutes}`

  const remainingSeconds = msInSeconds - totalMinutes * 60
  const seconds = `${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`

  if (!showMinutes && !showHours && msInSeconds < 60) {
    return `${seconds}${showLetter ? 's' : ''}`
  }

  if (!showHours && msInSeconds < 3600) {
    return `${minutes}:${seconds}${showLetter ? 'm' : ''}`
  }

  return `${hours}:${minutes}:${seconds}${showLetter ? 'h' : ''}`
}
