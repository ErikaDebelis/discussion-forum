import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function NewsFeed(props){
  return(
    <React.Fragment>
      <hr />
      {Object.values(props.newsFeed || {}).map((post) => {
        return <Post
          whenPostClicked = {props.onPostSelection}
          name={post.name}
          location={post.location}
          feeling={post.feeling}
          content={post.content}
          id={post.id}
          key={post.id} />
      })}
    </React.Fragment>
  );
}

NewsFeed.propTypes ={
newsFeed: PropTypes.object,
onPostSelection: PropTypes.func
};

export default NewsFeed;