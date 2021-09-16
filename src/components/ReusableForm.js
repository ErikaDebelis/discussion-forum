import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Form onSubmit={props.formSubmissionHandler}>
            <div className ="formfloat">

              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control  type='text' name="name" placeholder="Tom" />
              </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control name="location"  type='text' placeholder="here" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Feeling</Form.Label>
                <Form.Control name="feeling"  type='text' placeholder="happy" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Post</Form.Label>
                <Form.Control as="textarea" name ='content' placeholder="what's on your mind..." rows={3} />
              </Form.Group>

            </div>

            <div className="d-grid gap-2 col-6 mx-auto">
              <Button variant="secondary" type='submit' padding='10' >{props.buttonText}</Button>
            </div>

          </Form>
        </Card.Body>
      </Card>
      <br />
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;