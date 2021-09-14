import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Pair Name' />
        <input
          type='text'
          name='forum'
          placeholder='Discussion' />
        <textarea
          name='post'
          placeholder='what"s on your mind...' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment> 
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;

