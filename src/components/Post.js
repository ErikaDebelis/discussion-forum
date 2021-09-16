import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
function Post(props){
  return(
    <React.Fragment>
      <div onClick = {()=> props.whenPostClicked(props.id)}>
        <div className ="formfloat">
          <Card>
            <Card.Header>{props.name} - in {props.location}</Card.Header>
            <Card.Body>
              <Card.Title>feeling: {props.feeling}</Card.Title>
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
  content: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func
}

export default Post;

{/* <Card>
  <Card.Header{props.name}</Card.Header>
  <Card.Body>
    <Card.Title>{props.location}</Card.Title>
    <Card.Text>{props.content}</Card.Text>
  </Card.Body>
</Card> */}