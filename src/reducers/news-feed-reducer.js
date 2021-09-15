export default (state = {
  1: {name: 'Godfrey',
    location: 'Kenya',
    content: 'Opioids are poison!',
    id: 1 },
    2: {name: 'Erika',
    location: 'Oregon',
    content: 'I am THE bootstrap lady',
    id: 2 },
    3: {name: 'Araceli',
    location: 'Texas loves their guns',
    id: 3 },
}, action) => {
  const { name, location, content, id } = action;
  switch (action.type) {
  case 'ADD_POST':
    return Object.assign({}, state, {
      [id]: {
        name: name,
        location: location,
        content: content,
        id: id
      }
    });
  case 'DELETE_POST':
    let newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};
