import React from 'react';
import Header from './Header';
import Profile from './Profile';
import Feed from './Feed';
import Suggested from './Suggested';

function App(){
  return (
    <React.Fragment>
      <div class="container">
        <Header />
        <div class="row">
          <div class="col-4">
            <Profile />
          </div>
          <div class="col-4">
            <Feed />
          </div>
          <div class="col-4">
            <Suggested />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;