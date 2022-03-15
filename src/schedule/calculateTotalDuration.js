export const calculateTotalDuration = schedule => {
  const { circuit } = schedule
  const { enabled, times, breakTime } = circuit

  const perCircuitDuration = schedule.steps.reduce(
    (acc, { duration }) => acc + duration,
    0
  )

  if (!enabled) {
    return perCircuitDuration
  }

  const totalBreakTime = (times - 1) * breakTime

  return perCircuitDuration * times + totalBreakTime
}
