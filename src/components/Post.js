import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return(
    <div className="panel panel-default p-3">
      <div className="panel-body">
        <div className="row">
          <div className="col-2 pr-0">
            <Avatar
            className="float-right"
            
    <React.Fragment>
      <div onClick = {()=> props.whenPostClicked(props.id)}>
        <h3>{props.name} | {props.location}</h3>
        <p>{props.content}</p>
      </div>
    </React.Fragment>
  );
}

Post.propTypes ={
  name: PropTypes.string.isRequired,
  location: PropTypes.string,
  content: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func
}

export default Post;