import {v4} from "uuid";
import ReusableForm from "./ReusableForm";

function NewPostForm(){
  return(
    <React.Fragment>
      <form onSubmit={handleNewPostSubmission}>
        <input type='text' name='names' placeholder='Name' />
        <input type='text' name='location' placeholder='lO' 
      </form>
    </React.Fragment>
  );
}

export default NewPostForm;