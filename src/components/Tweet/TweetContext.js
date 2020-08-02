import React from 'react';

import avatar from "../../assets/carmen-sandiego.png";

var moment = require('moment');

export const TweetProvider = ({ children }) => {
  const [numOfLikes, setNumOfLikes] = React.useState(460);
  const [numOfRetweets, setNumOfRetweets] = React.useState(65);
  const [isLiked, setIsLiked] = React.useState(false);
  const [isRetweeted, setIsRetweeted] = React.useState(false);




  const displayName = 'Carmen Sandiego';
  const username = 'carmen-sandiego';
  const avatarSrc = avatar;
  const tweetContents = 'Where in the world am I?';
  const isRetweetedByCurrentUser = isRetweeted;
  const isLikedByCurrentUser = isLiked;
  const date = `${moment().format('LT')} - ${moment().format('MMM Do, YYYY')}`;

  return (
    <TweetContext.Provider 
      value={{
        displayName,
        username,
        avatarSrc,
        tweetContents,
        isRetweetedByCurrentUser,
        isLikedByCurrentUser,
        date,
        numOfLikes,
        numOfRetweets
      }}
    >
      {children}
    </TweetContext.Provider>
  )
};

export const TweetContext = React.createContext(null);