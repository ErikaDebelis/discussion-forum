export default (state = {
  // 1: {name: 'Godfrey',
  //   location: 'Kenya',
  //   feeling: 'cool as a cucumber',
  //   content: 'Opioids are poison!',
  //   id: 1 },
  //   2: {name: 'Erika',
  //   location: 'Oregon',
  //   feeling: 'Sleepy',
  //   content: 'I am THE bootstrap lady',
  //   id: 2 },
  //   3: {name: 'Araceli',
  //   location: 'Texas',
  //   feeling: 'Determined',
  //   content: 'Texas love their guns',
  //   id: 3 },
}, action) => {
  const { name, location, feeling, content, id } = action;
  switch (action.type) {
  case 'ADD_POST':
    return Object.assign({}, state, {
      [id]: {
        name: name,
        location: location,
        feeling: feeling,
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
