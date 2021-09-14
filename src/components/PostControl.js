import React from "react";
import NewsFeed from "./NewsFeed"; 
import NewPostFrom from "./NewPostForm";
import { connect } from 'react-redux';

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

PostControl = connect()(PostControl);

export default PostControl;


