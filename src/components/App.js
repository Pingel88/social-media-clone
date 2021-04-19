import React from 'react';
import Profile from './Profile';
import Feed from './Feed';
import Suggested from './Suggested';

function App(){
  return (
    <React.Fragment>
      <Profile />
      <Feed />
      <Suggested />
    </React.Fragment>
  )
}

export default App;