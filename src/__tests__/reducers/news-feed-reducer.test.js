import newsFeedReducer from '../../reducers/news-feed-reducer';

describe('newsFeedReducer', () => {

  let action;
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
    const {
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
});