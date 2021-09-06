const reducer = (state = initialEntries, action) => {
  console.log(action)
  let newEntries
  switch (action.type) {
    case 'ADD_ENTRY':
      newEntries = state.concat({ ...action.payload })
      return newEntries
    case 'REMOVE_ENTRY':
      newEntries = state.filter((e) => e.id !== action.payload.id)
      return newEntries
    case 'UPDATE_ENTRY':
      newEntries = [...state]
      const index = newEntries.findIndex(
        (entry) => entry.id === action.payload.id
      )
      newEntries[index] = { ...action.payload.entry }
      return newEntries
    default:
      return state
  }
}

export default reducer

var initialEntries = [
  { id: 1, description: 'Work income REDUX', value: 1000, isExpense: false },
  { id: 2, description: 'Water bill', value: 20, isExpense: true },
  { id: 3, description: 'Rent', value: 300, isExpense: true },
  { id: 4, description: 'Power bill', value: 50, isExpense: true },
]
