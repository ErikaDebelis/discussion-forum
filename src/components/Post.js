import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
function Post(props){
  let style = {
    display:"flex"
  }
  return(
    <React.Fragment>
      <div onClick = {()=> props.whenPostClicked(props.id)}>
        <div className="formFloat">
          <Card>
            <Card.Header>{props.name} - in {props.location}</Card.Header>
            <Card.Body>
              <Card.Title>feeling: {props.feeling}</Card.Title>
              <i class="glyphicon glyphicon-chevron-up" onClick="upvote"></i>
              <span class="label label-primary">{{ votes }}</span>
              <i class="glyphicon glyphicon-chevron-down" onClick="downvote"></i>
              <a>{{ name }}</a>
              <Card.Text>{props.content}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <br />
      <hr />
      <br />
    </React.Fragment>
  );
}

Post.propTypes ={
  name: PropTypes.string.isRequired,
  location: PropTypes.string,
  feeling: PropTypes.string,
  content: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func
}

export default Post;