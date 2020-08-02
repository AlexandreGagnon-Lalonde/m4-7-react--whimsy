import React from 'react';

import avatar from "../../assets/carmen-sandiego.png";

var moment = require('moment');



export const TweetProvider = ({ children }) => {
  const [numOfLikes, setNumOfLikes] = React.useState(460);
  const [numOfRetweets, setNumOfRetweets] = React.useState(65);
  const [isLiked, setIsLiked] = React.useState(false);
  const [isRetweeted, setIsRetweeted] = React.useState(false);

  const handleToggleLike = () => {
    if (isLiked) {
      setNumOfLikes(numOfLikes - 1)
      setIsLiked(false)
    } else {
      setNumOfLikes(numOfLikes + 1)
      setIsLiked(true)
    }
  }
  const handleToggleTweet = () => {
    console.log(isRetweeted)
    if (isRetweeted) {
      setNumOfRetweets(numOfRetweets - 1)
      setIsRetweeted(false)
    } else {
      setNumOfRetweets(numOfRetweets + 1)
      setIsRetweeted(true)
    }
  }


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
        numOfRetweets,
        handleToggleLike,
        handleToggleTweet
      }}
    >
      {children}
    </TweetContext.Provider>
  )
};

export const TweetContext = React.createContext(null);