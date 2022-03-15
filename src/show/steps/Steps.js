import { Step } from './Step.js'

export const Steps = ({ steps }) => {
  return (
    <div>
      {steps.map(({ title, duration }, index) => (
        <Step
          key={`${title}-${index}`}
          title={title}
          duration={duration}
        />
      ))}
    </div>
  )
}
