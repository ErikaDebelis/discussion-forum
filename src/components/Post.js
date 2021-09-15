import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import Avatar from 'react-avatar'
import ReactHtmlParser from 'react-html-parser'

import styles from './Post.css'

function Post({name, content, location}){
  const clean = DOMPurify.sanitize(content)
  return(
    <div className="panel panel-default p-3">
      <div className="panel-body">
        <div className="row">
          <div className="col-2 pr-0">
            <Avatar
              className="float-right"
              size={50}
              name={name}
              location={location}
              content={content} />
          </div>
            <div className="col-7">
              <p className={`mb-1 ${styles.name}`}>{name}</p>
              <div className={styles.text}>{ReactHtmlParser(clean)}</div>
            </div>
        </div>
      </div>
    </div>
  );
}

//     <React.Fragment>
//       <div onClick = {()=> props.whenPostClicked(props.id)}>
//         <h3>{props.name} | {props.location}</h3>
//         <p>{props.content}</p>
//       </div>
//     </React.Fragment>
//   );
// }

// Post.propTypes ={
//   name: PropTypes.string.isRequired,
//   location: PropTypes.string,
//   content: PropTypes.string.isRequired,
//   id: PropTypes.string,
//   whenPostClicked: PropTypes.func
// }

export default Post;