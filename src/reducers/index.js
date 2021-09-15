import formVisibleReducer from './form-visible-reducer';
import newsFeedReducer from './news-feed-reducer';
import editingReducer from './editing-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  editing: editingReducer,
  masterNewsFeed: newsFeedReducer
});

export default rootReducer;