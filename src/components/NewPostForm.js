import {v4} from "uuid";
import ReusableForm from "./ReusableForm";
import React from "react";
import PropTypes from "prop-types";

function NewPostForm(props){
  function handleNewPostSubmission(event){
    event.preventDefault();
    console.log(event.target.name.value,)
    props.onNewPostCreation({
      name: event.target.name.value,
      location: event.target.location.value,
      content: event.target.content.value,
      id: v4()
    });
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