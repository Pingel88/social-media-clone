import React from "react";
import NewPost from "./NewPost";
import PostList from "./PostList";

function Feed() {
  return (
    <React.Fragment>
      <NewPost />
      <PostList />
    </React.Fragment>
  );
}
