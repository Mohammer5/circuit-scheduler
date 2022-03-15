const defaultAction = {
  type: '__NO_ACTION__',
  payload: {},
}

export const createReducer = ({ cases, createDefaultState }) => {
  const defaultState = createDefaultState()

  return (state = defaultState, action = {}) => {
    const actualAction = { ...defaultAction, ...action }

    for (const { types, handler } of cases) {
      if (types.includes(actualAction.type)) {
        return handler(state, actualAction)
      }
    }

    return state
  }
}
