import formVisibleReducer from './form-visible-reducer';
import newsFeedReducer from './news-feed-reducer';
import editingReducer from './editing-reducer';
import selectedPostReducer from './selected-post-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  editing: editingReducer,
  selectedPost: selectedPostReducer,
  masterNewsFeed: newsFeedReducer
});

export default rootReducer;