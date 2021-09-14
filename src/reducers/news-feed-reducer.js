export default (state = {}, action) => {
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
  default:
    return state;
  }
};