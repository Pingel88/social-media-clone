import React from 'react';

function NewPost(){
  return (
    <React.Fragment>
      <form>
      <div class="form-group">
        <input class="form-control" placeholder="Say something about your day..." />
      </div>
      <button type="submit" class="btn btn-outline-primary">Post</button>
      </form>
    </React.Fragment>
    );
} 

export default NewPost;