import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";
import Button from "react-bootstrap";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder=' Name' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='content'
          placeholder='whats on your mind...' />
        <Button variant="secondary" type='submit'>{props.buttonText}</Button>
      </form>
    </React.Fragment> 
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;

