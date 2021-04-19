import React from "react";
import randoCalrissian from "./../img/rando.jpg"
// import PropTypes from "prop-types";

function ProfileName() {
  return (
  <React.Fragment>
    <img src={randoCalrissian} alt="Billy Dee Williams Impersonator - Jimmie Morgan" width="50%"/>
    <h3>Rando Calrissian</h3>
  </React.Fragment>
  );
}

// ProfileName.propTypes = {
//   name: PropTypes.string.isRequired
// }

export default ProfileName;
