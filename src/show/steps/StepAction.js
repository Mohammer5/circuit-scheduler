import css from './StepAction.module.css'

export const StepAction = ({ children }) => (
  <div className={css.stepAction}>
    {children}
  </div>
)
