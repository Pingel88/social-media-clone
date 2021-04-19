import React from "react";
import PropTypes from "prop-types";

function Friend(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <hr/>
    </React.Fragment>
  );
}

Friend.propTypes