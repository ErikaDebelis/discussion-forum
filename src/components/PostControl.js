import React from "react";
import NewsFeed from "./NewsFeed"; 
import NewPostForm from "./NewPostForm";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewPostToNewsFeed = (newPost) => {
    const { dispatch } = this.props;
    const { id, name, location, content } = newPost;
    const action = {
      type: 'ADD_POST',
      id: id,
      name: name,
      location: location,
      content: content,
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
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
  if (this.state.formVisibleOnPage){
    currentlyVisibleState = <NewPostForm />
    buttonText = "Return to News Feed"
  }else {
    currentlyVisibleState = <NewsFeed /> 
    buttonText = "Add Post"
  }
  return(
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
    )
  }
}

PostControl.propTypes = {
  masterNewsFeed: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterNewsFeed: state
  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;


