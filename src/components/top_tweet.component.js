import React from 'react'
import styled from 'styled-components'

import { navy } from '../style/colors'

const StyledRow = styled.tr`
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  padding: 2em 0;
`

const ProfilePic = styled.td`

`

const TweetStat = styled.td`
  color: ${navy};
  font-size: 20px;
`
  
const TweetText = styled.td`
  color: gray;
  max-width: 350px;
  font-size: 14px;
  text-align: left !important;
`

export const TopTweet = (props) => {
  const { tweet, picUrl } = props

  return(
    <StyledRow> 
      <ProfilePic><img alt={`@${tweet.username}`} src={picUrl} /></ProfilePic>
      <TweetStat>{tweet.retweets}</TweetStat>
      <TweetStat>{tweet.favorites}</TweetStat>
      <TweetText>{tweet.text}</TweetText>
      <td>{tweet.timestamp}</td>
    </StyledRow>
  )
}