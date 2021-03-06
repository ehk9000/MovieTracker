export const isLoadingReducer = (state = true, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}

export const hasErroredReducer = (state = '', action) => {
  switch (action.type) {
    case 'HAS_ERRORED':
      return action.error
    default:
      return state
  }
}