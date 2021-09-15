import React from 'react';
import PropTypes from 'prop-types';

function PostDetail(props){
  const{ post, onClickingDelete } = props;
  return(
    <React.Fragment>
      <h1>Post Details</h1>
      <h3>{props.names} - {props.location}</h3>
      <p>{props.content}</p>
      <button onClick={ props.onClickingEdit }>Update Post</button>
      <button onClick={() => onClickingDelete(post.id) }>Delete</button>
      <hr/>
    </React.Fragment>

  );
}

PostDetail.propTypes ={
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default PostDetail;