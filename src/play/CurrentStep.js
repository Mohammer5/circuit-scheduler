import css from './CurrentStep.module.css'

export const CurrentStep = ({ step }) => (
  <div className={css.currentStep}>
    {!step.circuitBreak && (
      <div className={css.currentCircuit}>
        Current circuit: {step.circuit + 1}
      </div>
    )}

    <div className={css.title}>
      {step.circuitBreak && 'Break between circuits'}
      {!step.circuitBreak && step.title}
    </div>
  </div>
)
