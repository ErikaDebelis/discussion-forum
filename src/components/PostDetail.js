import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button'

function PostDetail(props){
  const{ post, onClickingDelete } = props;
  return(
    <React.Fragment>
      <h1>Post Details</h1>
      <h3>{props.names} - {props.location}</h3>
      <p>{props.content}</p>
      <Button variant="outline-secondary" size="sm" onClick={ props.onClickingEdit }>Update Post</Button>
      <Button variant="outline-danger" size="sm" onClick={() => onClickingDelete(post.id) }>Delete</Button>
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