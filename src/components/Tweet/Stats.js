import React from "react";
import styled from "styled-components";

import { TweetContext } from "./TweetContext";

const Stats = () => {
  const { numOfLikes, numOfRetweets } = React.useContext(TweetContext);
  return (
    <>
      <Retweet>
        <Bold>{numOfRetweets}</Bold> Retweets
      </Retweet>
      <Like>
        <Bold>{numOfLikes}</Bold> Likes
      </Like>
    </>
  );
};

const Retweet = styled.p`
  color: lightgray;
`;
const Like = styled.p`
  color: lightgray;
  margin: 16px 32px;
`;
const Bold = styled.span`
  font-weight: bold;
  color: black;
`;

export default Stats;