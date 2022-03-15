import { useEffect, useState } from 'react'
import { calculateTotalDuration } from '../schedule/index.js'

export const useTimer = schedule => {
  const [startTime] = useState((new Date()).getTime())
  const [timeElapsedMs, setTimeElapsedMs] = useState(0)
  const [totalTime] = useState(() => {
    if (!schedule) return 0
    return calculateTotalDuration(schedule)
  })
  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = (new Date()).getTime()
      const nextTimeElapsedMs = now - startTime
      setTimeElapsedMs(nextTimeElapsedMs)
    }, 500)

    return () => clearInterval(interval)
  }, [startTime, setTimeElapsedMs])

  return { timeElapsedMs, totalTime }
}
