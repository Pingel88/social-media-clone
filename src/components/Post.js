import React from 'react';

function Post(props){
  return (
    <React.Fragment>
      <img src={props.pic} alt="profile pic" class="feed-pic"/>
      <h4>{props.name}</h4>
      <p>{props.update}</p>
      <hr/>
    </React.Fragment>
  )
}

export default Post;