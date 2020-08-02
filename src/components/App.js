import React from "react";
import styled from "styled-components";

import Tweet from "./Tweet";

import { TweetContext } from "./Tweet/TweetContext";

const App = () => {
  const {
    displayName,
    username,
    avatarSrc,
    tweetContents,
    isRetweetedByCurrentUser,
    isLikedByCurrentUser,
  } = React.useContext(TweetContext);

  return (
    <Wrapper>
      <Tweet
        tweetContents={tweetContents}
        displayName={displayName}
        username={username}
        avatarSrc={avatarSrc}
        isRetweetedByCurrentUser={isRetweetedByCurrentUser}
        isLikedByCurrentUser={isLikedByCurrentUser}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;

export default App;
