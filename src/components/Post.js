import React from 'react';

function Post(props){
  return (
    <React.Fragment>
      <h4>{props.name}</h4>
      <p>{props.update}</p>
      <hr/>
    </React.Fragment>
  )
}

export default Post;