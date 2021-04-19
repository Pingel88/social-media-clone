import React from 'react';
import SuggestedFriend from './Friend';

const suggestedFriends = [
  {
    name: 'Yoda',
  },
  {
    name: 'Princess Leia',
  },
  {
    name: 'Han Solo',
  },
]

function SuggestedList() {
  return (
    <React.Fragment>
      {suggestedFriends.map((friend, index) => 
        <Friend
          name={friend.name}
          key={index}
        />
      )}
    </React.Fragment>
  );
}

export default SuggestedList;
