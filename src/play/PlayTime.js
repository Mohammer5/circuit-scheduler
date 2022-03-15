import { formatMilliseconds } from '../utils/index.js'
import css from './PlayTime.module.css'

const MINUTE_IN_MS = 1000 * 60
const HOUR_IN_MS = 1000 * 60 * 60

export const PlayTime = ({ timeElapsedMs, totalDuration }) => {
  const showMinutes = totalDuration > MINUTE_IN_MS
  const showHours = totalDuration > HOUR_IN_MS
  const timeFormatted = formatMilliseconds(
    timeElapsedMs,
    { showMinutes, showHours, showLetter: false }
  )
  const totalDurationFormatted = formatMilliseconds(
    totalDuration,
    { showMinutes, showHours, showLetter: false }
  )

  return (
    <div className={css.playTime}>
      <div className={css.timeElapsed}>
        {timeFormatted}
      </div>
      <div className={css.duration}>
        {totalDurationFormatted}
      </div>
    </div>
  )
}
