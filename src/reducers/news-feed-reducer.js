import * as constant from './../actions/Actions';

const defaultState = {
  masterNewsFeed: {
    1: {
      name: 'Godfrey',
      location: 'Kenya',
      feeling: 'cool as a cucumber',
      content: 'Opioids are poison!',
      votes: 0,
      id: '1' 
    },
    2: {
      name: 'Erika',
      location: 'Oregon',
      feeling: 'Sleepy',
      content: 'I am THE bootstrap lady',
      votes: 0,
      id: '2' 
    },
    3: {
      name: 'Araceli',
      location: 'Texas',
      feeling: 'Determined',
      content: 'Texans love their guns',
      votes: 0,
      id: '3' 
    }
  },

  
}

export default (state = defaultState, action) => {
  const { name, location, feeling, content, id } = action;
  switch (action.type) {
  case constant.ADD_POST:
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
  case constant.DELETE_POST:
    let newMasterNewsFeed = { ...state };
    delete newMasterNewsFeed[id];
    return newMasterNewsFeed;
  default:
    return state;
  }
};
