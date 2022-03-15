import css from './Action.module.css'

export const Action = ({ children, onClick }) => (
  <button className={css.action} onClick={onClick}>
    {children}
  </button>
)
