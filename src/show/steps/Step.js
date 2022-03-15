import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faBars, faGear } from '@fortawesome/free-solid-svg-icons'
import { formatMilliseconds } from '../../utils/index.js'
import { StepAction } from './StepAction.js'
import css from './Step.module.css'

export const Step = ({ title, duration }) => (
  <div className={css.step}>
    <div className={css.data}>
      <h3 className={css.title}>{title}</h3>

      <p className={css.duration}>
        {formatMilliseconds(duration)}
      </p>
    </div>

    <div className={css.actions}>
      <StepAction>
        <FontAwesomeIcon icon={faBan} />
      </StepAction>

      <StepAction>
        <FontAwesomeIcon icon={faGear} />
      </StepAction>

      <StepAction>
        <FontAwesomeIcon icon={faBars} />
      </StepAction>
    </div>
  </div>
)
