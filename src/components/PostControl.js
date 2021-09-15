import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EditPostForm from './EditPostForm';
import NewsFeed from './NewsFeed';
import NewPostForm from './NewPostForm';
import PostDetail from './PostDetail';
import Button from "react-bootstrap/Button";

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      formVisibleOnPage: false,
      selectedPost: null,
      editing: false
    };
  }

  handleClick = () =>{
    if (this.state.selectedPost != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null,
        editing: false
      });
    } else {
      // const { dispatch } = this.props;
      // const action = {
      // type: 'TOGGLE_FORM'
      // }
      // dispatch(action)
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.masterNewsFeed[id];
    this.setState({selectedPost: selectedPost});
  }

  handleAddingNewPostToNewsFeed = (newPost) => {
    const { dispatch } = this.props;
    const { id, name, location, content } = newPost;
    const action = {
      type: 'ADD_POST',
      id: id,
      name: name,
      location: location,
      content: content
    }
    dispatch(action);
    // const action2 = {
    //   type: 'TOGGLE_FORM'
    // }
    // dispatch(action2);
    this.setState({formVisibleOnPage: false})
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingNewPostInNewsFeed = (postToEdit) => {
    const { dispatch } = this.props;
    const { id, name, location, content } = postToEdit;
    const action = {
      type: 'ADD_POST',
      id: id,
      name: name,
      location: location,
      content: content,
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedPost: null
    });
  }

  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_POST',
      id: id
    }
    dispatch(action);
    this.setState({selectedPost: null});
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

PostControl = connect(mapStateToProps)(PostControl);

PostControl.propTypes ={
  masterNewsFeed: PropTypes.object,
  // formVisibleOnPage: PropTypes.bool
}

export default PostControl;


