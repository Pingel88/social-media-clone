import React from "react";
import PostList from "./PostList";
import NewPost from "./NewPost";

function Feed() {
  return (
    <React.Fragment>
      <h3>News Feed</h3>
      <NewPost />
      <hr/>
      <PostList />
    </React.Fragment>
  );
}

export default Feed;