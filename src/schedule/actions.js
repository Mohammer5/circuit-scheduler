import {
  ADD_SCHEDULE,
  REMOVE_SCHEDULE,
  UPDATE_SCHEDULE,
} from './actionTypes.js'

export const addSchedule = ({ schedule }) => ({
  type: ADD_SCHEDULE,
  payload: { schedule },
})

export const removeSchedule = ({ id }) => ({
  type: REMOVE_SCHEDULE,
  payload: { id },
})

export const updateSchedule = ({ id, schedule }) => ({
  type: UPDATE_SCHEDULE,
  payload: { id, schedule },
})
