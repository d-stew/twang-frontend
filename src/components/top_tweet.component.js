import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 10px 0;
  padding: 15px;
  border: 1px solid lightgrey;
  border-radius: 4px;
`

const TweetStats = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 50%;
  align-items: center;
  justify-content: space-around;  
`

const TweetStat = styled.span`
  display: flex;
  align-items: center; 
  
  h2 {
    font-size: 18px;
  }

  p {
    margin-left: 10px;
    font-size: 10px;
  }
`

const Tweet = styled.div`
  width: 100%;
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

export const TopTweet = (props) => {
  const { tweet, userData } = props

  console.log('USER DATA', userData)

  return (
    <Wrapper>
      <Tweet>
        <TweetHeader>
          <img alt={`@${tweet.username}`} src={userData.profilePicUrl} />
          <UserInfo>
            <h2>Donald Trump</h2>
            <p>@{tweet.username}</p>
          </UserInfo>
          <TweetStats>
            <TweetStat>
              <h2>{tweet.favorites + tweet.retweets}</h2>
              <p>TOTAL ENGAGEMENT</p>
            </TweetStat>
            <TweetStat>
              <h2>{tweet.retweets}</h2>
              <p>RETWEETS</p>
            </TweetStat>
            <TweetStat>
              <h2>{tweet.favorites}</h2>
              <p>FAVORITES</p>
            </TweetStat>
          </TweetStats>
        </TweetHeader>
        <TweetText>{tweet.text}</TweetText>
        <TweetDate>{tweet.timestamp}</TweetDate>  
      </Tweet>
    </Wrapper>
  )
}
