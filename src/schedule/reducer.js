import { createReducer } from '../utils/index.js'
import {
  ADD_SCHEDULE,
  REMOVE_SCHEDULE,
  UPDATE_SCHEDULE,
} from './actionTypes.js'

// const createDefaultState = () => ({
//   curIdCounter: 0,
//   schedules: [],
// })

const createDefaultState = () => ({
  curIdCounter: 1,
  schedules: [
    {
      id: '0',
      circuit: {
        enabled: true,
        times: 3,
        breakTime: 90000, // ms
      },
      title: 'Testing schedule',
      steps: [
        {
          title: 'Burpees with eeeextra long name in it',
          duration: 40000,
        },
        {
          title: 'Break',
          duration: 20000,
        },
        {
          title: 'Jump squads',
          duration: 40000,
        },
        {
          title: 'Break',
          duration: 20000,
        },
        {
          title: 'Skier abs',
          duration: 40000,
        },
      ],
    },
  ],
})

export const reducer = createReducer({
  createDefaultState,
  cases: [
    {
      types: [ADD_SCHEDULE],
      handler: (state, { payload }) => {
        const { curIdCounter, schedules } = state
        const { schedule } = payload

        return {
          ...state,
          curIdCounter: String(curIdCounter + 1),
          schedules: [
            ...schedules,
            { ...schedule, id: curIdCounter },
          ]
        }
      },
    },
    {
      types: [REMOVE_SCHEDULE],
      handler: (state, { payload }) => {
        const { schedules } = state

        return {
          ...state,
          schedules: schedules.filter(schedule => schedule.id !== payload.id),
        }
      }
    },
    {
      types: [UPDATE_SCHEDULE],
      handler: (state, { payload }) => {
        const { schedules } = state
        const { id, schedule } = payload

        return {
          ...state,
          schedules: schedules.map(
            curSchedule => curSchedule.id === id
              ? schedule
              : curSchedule
          ),
        }
      },
    },
  ],
})
