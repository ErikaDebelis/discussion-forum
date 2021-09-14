import newsFeedReducer from '../../reducers/news-feed-reducer';

describe('newsFeedReducer', () => {

  let action;

  const currentState = {
    1: {name: 'Godfrey',
    location: 'Kenya',
    content: 'Opioids are poison!',
    id: 1 },
    2: {name: 'Araceli',
    location: 'Texas',
    content: 'Texans love their guns.',
    id: 2 }
  };

  const postData = {
    name: 'Godfrey',
    location: 'Kenya',
    content: 'Opioids are poison!',
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(newsFeedReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add a new post to the newsFeed', () => {
    const {name, location, content, id } = postData;
    action = {
      type: 'ADD_POST',
      name: name,
      location: location,
      content: content,
      id: id
    };

    expect(newsFeedReducer({}, action)).toEqual({
      [id] : {
        name: name,
        location: location,
        content: content,
        id: id
      }
    });
  });

  test('Should successfully delete a post', () => {
    action = {
      type: 'DELETE_POST',
      id: 1
    };

    expect(newsFeedReducer(currentState, action)).toEqual({
      2: {name: 'Araceli',
        location: 'Texas',
        content: 'Texans love their guns.',
        id: 2 }
    });
  });
});