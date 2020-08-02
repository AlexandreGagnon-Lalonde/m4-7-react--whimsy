import React from 'react';

import avatar from "../../assets/carmen-sandiego.png";

export const TweetProvider = ({ children }) => {
  const displayName = 'Carmen Sandiego';
  const username = 'carmen-sandiego';
  const avatarSrc = avatar;
  const tweetContents = 'Where in the world am I?';
  const isRetweetedByCurrentUser = false;
  const isLikedByCurrentUser = false;

  return (
    <TweetContext.Provider 
      value={{
        displayName,
        username,
        avatarSrc,
        tweetContents,
        isRetweetedByCurrentUser,
        isLikedByCurrentUser,
      }}
    >
      {children}
    </TweetContext.Provider>
  )
};

export const TweetContext = React.createContext(null);