

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EditPostForm from './EditPostForm';
import NewsFeed from './NewsFeed';
import NewPostForm from './NewPostForm';
import PostDetail from './PostDetail';
import Button from "react-bootstrap/Button";
// import * as actions from './../actions';

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedPost: null,
      editing: false
    };
  }

  handleClick = () =>{
    if (this.state.selectedPost != null && this.props.editing === true) {
      const { dispatch } = this.props;
      const action = actions.nullSelectedPost();
      dispatch(action);
      const action2 = actions.editPost();
      dispatch(action2)
      });
    } else if (this.state.selectedPost != null && this.props.editing === false) {
      const { dispatch } = this.props;
      const action = actions.nullSelectedPost();
      dispatch(action);
    } else {
      const { dispatch } = this.props;
      const action = {
      type: 'TOGGLE_FORM'
      }
      dispatch(action)
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewPostToNewsFeed = (newPost) => {
    const { dispatch } = this.props;
    const action = actions.addPost(newPost);
    dispatch(action);
    const action2 = actions.toggleForm();
    dispatch(action2);
  }

  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = actions.deletePost(id);
    dispatch(action);
    const action2 = actions.nullSelectedPost();
    dispatch(action2);
  }

  handleEditingNewPostInNewsFeed = (postToEdit) => {
    const { dispatch } = this.props;
    const action1 = a.addPost(PostToEdit);
    dispatch(action1);
    const action2 = actions.editPost();
    dispatch(action2);
    const action3 = actions.nullSelectedPost();
    dispatch(action3);
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = actions.editPost();
    dispatch(action);
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.masterNewsFeed[id];
    const { dispatch } = this.props;
    const action = actions.selectPost(selectedPost)
    dispatch(action)
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing ) {
      currentlyVisibleState =
      <EditPostForm
        post = {this.state.selectedPost}
        onEditPost = {this.handleEditingPostInNewsFeed} />
      buttonText = "Return to News Feed";

    } else if (this.state.selectedPost != null) {
      currentlyVisibleState =
      <PostDetail
        post = {this.state.selectedPost}
        onClickingDelete = {this.handleDeletingPost}
        onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to News Feed";

    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState =
      <NewPostForm
        onNewPostCreation = {this.handleAddingNewPostToNewsFeed}/>;
      buttonText = "Return to News Feed";

    } else {
      currentlyVisibleState =
      <NewsFeed
        newsFeed = {this.props.masterNewsFeed}
        onPostSelection = {this.handleChangingSelectedPost} />;
      buttonText = "Add Post";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button variant="outline-primary" size="lg" onClick={this.handleClick}>{buttonText}</Button>
      </React.Fragment>
    );
  }

}

PostControl.propTypes = {
  masterNewsFeed: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterNewsFeed: state,
    // formVisibleOnPage: state.formVisibleOnPage
  }
}

PostControl.propTypes ={
    masterNewsFeed: state.masterNewsFeed,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedPost: state.selectedPost,
    editing: state.editing
}

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;


