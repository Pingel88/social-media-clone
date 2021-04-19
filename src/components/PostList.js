import React from 'react';
import Post from './Post';
import quiGon from './../img/qui-gon.jpg';
import yoda from './../img/yoda.png';
import obiWan from './../img/obi-wan.jpg';
import vader from './../img/vader.jpg';
import ackbar from './../img/ackbar.jpg';
import gonk from './../img/gonk.png';

const newsFeed = [
  {
    name: 'Qui-Gon Jinn',
    update: 'If you are looking for ransom, I can tell you I don\'t have money. But what I do have are a very particular set of skills; skills I have acquired over a very long career. Skills that make me a nightmare for people like you. If you let my daughter go now, that\'ll be the end of it.',
    pic: quiGon
  },
  {
    name: 'Yoda',
    update: 'Do. Or do not. There is no try.',
    pic: yoda
  },
  {
    name: 'Obi-Wan Kenobi',
    update: 'In my experience there is no such thing as luck.',
    pic: obiWan
  },
  {
    name: 'Darth Vader',
    update: 'I find your lack of faith disturbing.',
    pic: vader
  },
  {
    name: 'Admiral Ackbar',
    update: 'It\'s a trap!',
    pic: ackbar
  },
  {
    name: 'GNK Power Droid',
    update: 'GONK!',
    pic: gonk
  }
]

function PostList(){
  return (
    <React.Fragment>
      {newsFeed.map((post, index) =>
      <Post name={post.name}
        pic={post.pic}
        update={post.update}
        key={index}/>
        )}
    </React.Fragment>
  )
}

export default PostList;