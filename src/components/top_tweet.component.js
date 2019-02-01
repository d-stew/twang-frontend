import React from 'react'
import styled from 'styled-components'

import { navy, arctic } from '../style/colors'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
  
const TweetStats = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 50%;
  align-items: center;
  justify-content: center;  
`
  
const TweetStat = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  margin: 0 1em;
  
  h2 {
    color: ${arctic};
    margin: 0;
    font-size: 18px;
    word-break: keep-all;

    &.total {
      color: ${navy};
    }
  }
  
  p {
    margin: 0.25em 0.5em;
    font-size: 10px;
    word-break: keep-all;   
    text-align: center;
  }
`
  
const Tweet = styled.div`
  width: 750px;
  max-width: 750px;
  border: 1px solid lightgrey;
  border-radius: 15px;
  padding: 20px;
  margin: 10px 0;
`

const TweetHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    height: 45px;
    width: 45px;
    border-radius: 4px;
  }
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  h2 {
    margin: 0;
    font-size: 18px;
  }

  p {
    color: grey; 
    margin: 0;
    font-size: 14px;
  }
`

const TweetText = styled.p`
  font-size: 14px;
  margin: 0.25em 0;
`

const TweetDate = styled.p`
  color: gray;
  font-size: 10px;
  margin: 0;
`

const formatNumber = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

export const TopTweet = (props) => {
  const { tweet, userData } = props

  return (
    <Wrapper>
      <TweetStats>
        <TweetStat>
          <h2 className="total">{formatNumber(tweet.favorites + tweet.retweets)}</h2>
          <p>TOTAL ENGAGEMENT</p>
        </TweetStat>
        <TweetStat>
          <h2>{formatNumber(tweet.retweets)}</h2>
          <p>RETWEETS</p>
        </TweetStat>
        <TweetStat>
          <h2>{formatNumber(tweet.favorites)}</h2>
          <p>FAVORITES</p>
        </TweetStat>
      </TweetStats>
      <Tweet>
        <TweetHeader>
          <img alt={`@${tweet.username}`} src={userData.profilePicUrl} />
          <UserInfo>
            <h2>{userData.user.name}</h2>
            <p>@{tweet.username}</p>
          </UserInfo>
        </TweetHeader>
        <TweetText>{tweet.text}</TweetText>
        <TweetDate>{tweet.timestamp}</TweetDate>  
      </Tweet>
    </Wrapper>
  )
}
