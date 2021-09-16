import * as constant from './../actions/Actions';

export default (state = false, action) => {
  switch (action.type) {
  case constant.EDIT_POST:
    return !state;
  default:
    return state;
  }
};