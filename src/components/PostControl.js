import React from "react";
import NewsFeed from "./NewsFeed"; 
import NewPostFrom from "./NewPostForm";

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    }
  }


  render(){
  let currentlyVisibleState = null;
  if (this.state.formVisibleOnPage){
    currentlyVisibleState = <NewPostForm />
  }else {
    currentlyVisibleState = <NewsFeed /> 
    addPostButton = <button onClick={this.handleClick}>Add Post</button>
  }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        {addPostButton}
      </React.Fragment>
    )
  }
}

export default PostControl;


