const counterReducer = (state = 0, action) => {
  const increment = state => state + action.payload
  const decrement = state => state - action.payload

  switch (action.type) {
    case 'INCREMENT':
      return increment(state)
    case 'DECREMENT':
      return decrement(state)
    default:
      return state
  }
}

export default counterReducer