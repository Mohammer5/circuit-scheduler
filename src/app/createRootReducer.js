import { combineReducers } from 'redux'
import { scheduleReducer } from '../schedule/index.js'

export const createRootReducer = () => combineReducers({
  schedule: scheduleReducer,
})
