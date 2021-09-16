import {v4} from "uuid";
import ReusableForm from "./ReusableForm";
import React from "react";
import PropTypes from "prop-types";
// import Post from "./Post";

function NewPostForm(props){
  function handleNewPostSubmission(event){
    event.preventDefault();
    props.onNewPostCreation({
      name: event.target.name.value,
      location: event.target.location.value,
      feeling: event.target.feeling.value,
      content: event.target.content.value,
      votes: 0,
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