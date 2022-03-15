import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faPlay } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Actions, Action, ScheduleTitle } from '../utils/index.js'
import { calculateTotalDuration, updateSchedule } from '../schedule/index.js'
import { CircuitTraining } from './circuitTraining/index.js'
import { Steps } from './steps/index.js'
import css from './Show.module.css'

export const Show = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const schedule = useSelector(state => state.schedule.schedules.find(
    curSchedule => curSchedule.id === id
  ))

  if (!schedule) {
    return (
      <div>
        <h1>No schedule for the selected id exists</h1>
      </div>
    )
  }

  const totalDuration = schedule ? calculateTotalDuration(schedule) : 0

  return (
    <div className={css.show}>
      <ScheduleTitle
        title={schedule?.title}
        totalDuration={totalDuration}
      />

      <div className={css.circuit}>
        <CircuitTraining
          enabled={schedule.circuit.enabled}
          times={schedule.circuit.times}
          breakTime={schedule.circuit.breakTime}
          toggleEnabled={() => dispatch(updateSchedule({
            id,
            schedule: {
              ...schedule,
              circuit: {
                ...schedule.circuit,
                enabled: !schedule.circuit.enabled,
              }
            }
          }))}
        />
      </div>

      <div className={css.steps}>
        <Steps steps={schedule.steps || []} />
      </div>

      <div className={css.actions}>
        <Actions>
          <Action onClick={() => navigate(`/schedule/play/${id}`, { replace: true })}>
            <FontAwesomeIcon icon={faPlay} />
          </Action>

          <Action onClick={() => navigate(`/schedule/edit/${id}`, { replace: true })}>
            <FontAwesomeIcon icon={faGear} />
          </Action>
        </Actions>
      </div>
    </div>
  )
}
