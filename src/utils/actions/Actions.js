import css from './Actions.module.css'

export const Actions = ({ children }) => (
  <div className={css.actions}>
    {children}
  </div>
)
