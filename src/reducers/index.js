import formVisibleReducer from './form-visible-reducer';
import newsFeedReducer from './news-feed-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterNewsFeed: newsFeedReducer
});

export default rootReducer;