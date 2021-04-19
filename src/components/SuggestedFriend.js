import React from "react";
import PropTypes from "prop-types";

function SuggestedFriend(props) {
  return (
    <React.Fragment>
      <h4>{props.name}</h4>
      <button class="btn btn-dark">Follow</button>
      <hr/>
    </React.Fragment>
  );
}

SuggestedFriend.propTypes = {
  name: PropTypes.string.isRequired
}

export default SuggestedFriend;
