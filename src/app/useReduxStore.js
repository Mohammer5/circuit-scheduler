import { useState } from 'react'
import { configureStore } from '../utils/index.js'
import { createRootEpic } from './createRootEpic.js'
import { createRootReducer } from './createRootReducer.js'

export const useReduxStore = () => {
  const [store] = useState(() => {
    const rootReducer = createRootReducer()
    const rootEpic = createRootEpic()
    return configureStore({
      rootEpic,
      rootReducer,
    })
  })

  return store
}
