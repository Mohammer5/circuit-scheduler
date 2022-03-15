import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ScheduleTitle } from '../utils/index.js'
import { calculateTotalDuration, selectScheduleById } from '../schedule/index.js'
import { CurrentStep } from './CurrentStep.js'
import { PlayTime } from './PlayTime.js'
import { createPlaySteps } from './createPlaySteps.js'
import { useNavigateOnDone } from './useNavigateOnDone.js'
import { useNavigateOnMissingSchedule } from './useNavigateOnMissingSchedule.js'
import { useTimer } from './useTimer.js'

const usePlayStep = (schedule, timeElapsedMs) => {
  const playSteps = useMemo(
    () => {
      const nextPlaySteps = schedule ? createPlaySteps(schedule) : []
      return nextPlaySteps
    },
    [schedule]
  )

  return useMemo(() => {
    const curStep = playSteps.find((step, index, all) => {
      const nextStep = all[index + 1]

      if (!nextStep) return true

      const hasReachedCurStep = step.time <= timeElapsedMs
      const hasNotReachedNextStep = nextStep.time > timeElapsedMs
      return hasReachedCurStep && hasNotReachedNextStep
    })

    return curStep
  }, [playSteps, timeElapsedMs])
}

export const Play = () => {
  const { id } = useParams()
  const schedule = useSelector(selectScheduleById(id))
  const { timeElapsedMs, totalTime } = useTimer(schedule)
  const totalDuration = schedule ? calculateTotalDuration(schedule) : 0
  const currentStep = usePlayStep(schedule, timeElapsedMs)

  useNavigateOnMissingSchedule()
  useNavigateOnDone(timeElapsedMs, totalTime)

  return (
    <div>
      <ScheduleTitle
        title={schedule?.title}
        totalDuration={totalDuration}
      />

      <PlayTime
        timeElapsedMs={timeElapsedMs}
        totalDuration={totalDuration}
      />

      <CurrentStep step={currentStep} />
    </div>
  )
}
