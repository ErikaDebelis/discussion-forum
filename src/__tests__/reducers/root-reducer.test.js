import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import NewsFeedReducer from '../../reducers/news-feed-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  // test('Should return default state if no action type is recognized', () => {
  //   expect(rootReducer({}, { type: null })).toEqual({
  //     masterNewsFeed: {},
  //     formVisibleOnPage: false
  //   });
  // });

  test('Check that initial state of NewsFeedReducer matches root reducer', () => {
    expect(store.getState().masterNewsFeed).toEqual(NewsFeedReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

});