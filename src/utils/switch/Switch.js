import cx from 'classnames'
import css from './Switch.module.css'

export const Switch = (props) => {
  return (
    <label className={cx(css.switch, { [css.disabled]: props.disabled })}>
      <input className={css.input} type="checkbox" {...props} />
      <span className={cx(css.slider, css.round)}></span>
    </label>
  )
}
