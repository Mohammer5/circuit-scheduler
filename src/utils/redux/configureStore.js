import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

const composeEnhancers = window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const configureStore = ({
  initialState,
  rootReducer,
  rootEpic,
  context,
}) => {
  const epicMiddleware = createEpicMiddleware({ dependencies: context })
  const middleWare = composeEnhancers(applyMiddleware(epicMiddleware))

  const store = createStore(rootReducer, initialState, middleWare)
  epicMiddleware.run(rootEpic)

  return store
}
