export const selectScheduleById = id => state => {
  return state.schedule.schedules.find(
    curSchedule => curSchedule.id === id
  )
}
