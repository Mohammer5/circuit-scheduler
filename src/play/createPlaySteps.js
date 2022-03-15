export const createPlaySteps = schedule => {
  const { circuit, steps } = schedule
  const playSteps = []
  const circuitTimes = circuit.enabled ? circuit.times : 1

  for (let i = 0; i < circuitTimes; ++i) {
    if (i > 0) {
      const [prevPlayStep] = playSteps.slice(-1)
      const curStepTime = prevPlayStep.time + prevPlayStep.duration

      playSteps.push({
        duration: circuit.breakTime,
        time: curStepTime,
        title: '!! Break !!',
        circuitBreak: true,
      })
      // @TODO: add break step
    }

    for (let a = 0; a < steps.length; a++) {
      const step = steps[a]
      const [prevPlayStep] = playSteps.slice(-1)

      const curStepTime = prevPlayStep
        ? prevPlayStep.time + prevPlayStep.duration
        : 0 // first step of first circuit

      playSteps.push({
        ...step,
        time: curStepTime,
        circuitBreak: false,
        circuit: i,
      })
    }
  }

  return playSteps
}
