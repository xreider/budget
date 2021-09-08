import entriesTypes from '../actions/entries.actions';

const reducer = (state = initialEntries, action) => {
  console.log(action);
  let newEntries;
  let index;
  switch (action.type) {
    case entriesTypes.POPULATE_ENTRIES:
      return action.payload;

    case entriesTypes.ADD_ENTRY:
      newEntries = state.concat({ ...action.payload });
      return newEntries;

    case entriesTypes.REMOVE_ENTRY:
      newEntries = state.filter((e) => e.id !== action.payload.id);
      return newEntries;

    case entriesTypes.UPDATE_ENTRY:
      newEntries = [...state];
      index = newEntries.findIndex((entry) => entry.id === action.payload.id);
      newEntries[index] = { ...action.payload.entry };
      return newEntries;

    case entriesTypes.POPULATE_ENTRY_DETAILS:
      // console.log(action.payload);
      newEntries = [...state];
      index = newEntries.findIndex((entry) => entry.id === action.payload.id);
      newEntries[index] = { ...newEntries[index], ...action.payload.entry };
      return newEntries;

    default:
      return state;
  }
};

export default reducer;

var initialEntries = [];
