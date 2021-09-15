import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control  type='text' name="name" placeholder="Tom" />
        </Form.Group>
          <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control name="location"  type='text' placeholder="here" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Post</Form.Label>
          <Form.Control type="textarea" name ='content' placeholder="what's on your mind..." rows={3} />
        </Form.Group>
        <div class="d-grid gap-2 col-6 mx-auto">
          <Button variant="secondary" type='submit'>{props.buttonText}</Button>
        </div>
      </Form>
    </React.Fragment> 
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;