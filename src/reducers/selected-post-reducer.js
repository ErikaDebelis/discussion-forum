import * as constant from './../actions/Actions';

export default (state = defaultState, action) => {
  const { name, location, feeling, content, id } = action;
  switch(action.type) {
    case constant.SELECT_POST:
    return Object.assign({}, state, {
      masterNewsFeed: {
        ...state.masterNewsFeed,
        [id]: {
          name: name,
          location: location,
          feeling: feeling,
          content: content,
          id: id
        }
      }
    });
    case constant.NULL_SELECTED_POST:
      return null;
    default:
      return state;
  }
}