import React from "react";
import ProfileName from "./ProfileName";
import ProfileAbout from "./ProfileAbout";

function Profile() {
  return (
    <React.Fragment>
      <ProfileName />
      <ProfileAbout />
    </React.Fragment>
  );
}

export default Profile;