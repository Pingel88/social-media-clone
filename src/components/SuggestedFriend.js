import React from "react";
import PropTypes from "prop-types";

function SuggestedFriend(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <hr/>
    </React.Fragment>
  );
}

SuggestedFriend.propTypes = {
  name: PropTypes.string.isRequired
}

export default SuggestedFriend;
