import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return(
    <React.Fragment>
      <div onClick = {()=> props.whenPostClicked(props.id)}>
        <h3>{props.names} | {props.location}</h3>
        <p>{props.content}</p>
      </div>
    </React.Fragment>
  );
}

Post.propTypes ={
  names: PropTypes.string.isRequired,
  location: PropTypes.string,
  content: PropTypes.string.isRequired,
  id: PropTypes.string
}

export default Post;