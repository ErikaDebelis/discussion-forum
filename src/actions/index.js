import * as constant from './Actions';

export const addPost = (post) => {
  const { name, location, feeling, content, id } = post;
  return {
    type: constant.ADD_POST,
    name: name,
    location: location,
    feeling: feeling,
    content: content,
    id: id
  };
}

export const toggleForm = () => ({
  type: constant.TOGGLE_FORM
});

export const deletePost = (id) => ({
  type: constant.DELETE_POST,
  id
});

export const selectPost = (post) => {
  const { name, location, feeling, content, id } = post;
  return {
    type: constant.SELECT_POST,
    name: name,
    location: location,
    feeling: feeling,
    content: content,
    id: id
  }
}

export const nullSelectedPost = () => {
  return {
    type: constant.NULL_SELECTED_POST
  }
}

export const editPost = () => {
  return {
    type: constant.EDIT_POST,
  }
};