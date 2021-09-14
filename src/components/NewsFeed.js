import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function NewsFeed(props){
  return(
    <React.Fragment>
      <hr />
      {Object.values(props.newsFeed).map((post) =>
        <
        )}
    </React.Fragment>
  );
}

export default NewsFeed;