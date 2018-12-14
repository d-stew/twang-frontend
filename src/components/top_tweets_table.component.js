import React from 'react'
import styled from 'styled-components'

import { TopTweet } from './top_tweet.component'
import { navy } from '../style/colors'

const Table = styled.table`
  width: 90%;
  margin: 1em;
  border-radius: 4px 4px 0 0;

  tbody > tr {
    height: 3em;
    border: 1px solid lightgrey;
  }

  tbody > tr > td {
    text-align: center;
  }
`

const LabelRow = styled.tr`
  color: white;
  background-color: ${navy};
`

const HeaderRow = styled.tr`
  height: 4em;
  color: ${navy};
  background-color: white;
  font-size: 14px;
  font-weight: 600;
`

export const TopTweetsTable = (props) => {
  const { userData } = props

  console.log('PIC URL', userData.profilePicUrl)

  return(
    <Table>
      <tbody>
        <HeaderRow>
          <td>Top Tweets by Engagement</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </HeaderRow>
        <LabelRow>
          <td></td>
          <td>Retweets</td>
          <td>Favorites</td>
          <td></td>
          <td>Date</td>
        </LabelRow>
        {userData.topTweets.map((tweet, i) => {
          return (
            <TopTweet key={`top-tweet-${i}`} tweet={tweet} picUrl={userData.profilePicUrl}/>
          )
        })}
      </tbody>
    </Table>
  )
}