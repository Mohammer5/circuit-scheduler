import { formatMilliseconds } from '../time/index.js'
import css from './ScheduleTitle.module.css'

export const ScheduleTitle = ({ title, totalDuration }) => {
  return (
    <div className={css.titleContainer}>
      <h1 className={css.title}>
        {title}
      </h1>

      <p className={css.totalDuration}>
        Total duration:{' '}
        {formatMilliseconds(totalDuration)}
      </p>
    </div>
  )
}
