import css from './CircuitTraining.module.css'
import { Switch, formatMilliseconds } from '../../utils/index.js'

export const CircuitTraining = ({
  enabled,
  times,
  breakTime,
  toggleEnabled,
}) => {
  return (
    <>
      <div className={css.titleContainer}>
        <h2 className={css.title}>
          Circuit
        </h2>

        <Switch
          name="circuitEnabled"
          checked={enabled}
          onChange={toggleEnabled}
        />
      </div>

      <div className={css.data}>
        <div className={css.times}>
          <b>Circuits</b>: {enabled ? times : '0'}
        </div>

        {enabled && (
          <div className={css.breakTime}>
            <b>Break time</b>: {formatMilliseconds(breakTime)}
          </div>
        )}
      </div>
    </>
  )
}
