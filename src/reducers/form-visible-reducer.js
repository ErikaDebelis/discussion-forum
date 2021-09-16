
import * as constant from './../actions/Actions';

export default (state = false, action) => {
  switch (action.type) {
  case constant.TOGGLE_FORM:
    return !state;
  default:
    return state;
  }
};