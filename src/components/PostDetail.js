import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';

function PostDetail(props){
  const{ post, onClickingDelete } = props;
  return(
    <React.Fragment>
      <h1>Post Details</h1>
        <div className ="formfloat">
          <Card>
            <Card.Header>{post.name} - in {post.location}</Card.Header>
            <Card.Body>
              <Card.Title>feeling: {post.feeling}</Card.Title>
              <Card.Text>{post.content}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      <br />
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