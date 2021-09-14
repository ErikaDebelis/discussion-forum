import {v4} from "uuid";
import ReusableForm from "./ReusableForm";
import React from "react";
import PropTypes from "prop-types";

function NewPostForm(){
  function handleNewPostSubmission(event){
    event.preventDefault();
    props.onNewPostCreation({names: event.target.names.value, location: event.target.location.value, content: event.target.content.value, id: v4()});
  }
  return(
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewPostSubmission}
      buttonText="Add" />
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
}

export default NewPostForm;