import {v4} from "uuid";
import ReusableForm from "./ReusableForm";
import React from "react";

function NewPostForm(){
  function handleNewPostSubmission(event){
    event.preventDefault();
  }
  return(
    <React.Fragment>
      <form onSubmit={handleNewPostSubmission}>
        <input type='text' name='names' placeholder='Name' />
        <input type='text' name='location' placeholder='Location'/>
        <textarea type='text' name='content' placeholder="What's on your mind?" rows="4" cols="50" />
        <button type="submit">Add</button>
      </form>
    </React.Fragment>
  );
}

export default NewPostForm;