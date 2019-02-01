import React from 'react'
import styled from 'styled-components'
import { sortBy } from 'lodash'

import { TopTweet } from './top_tweet.component'

const Wrapper = styled.div`
  width: 90%;
  margin: 0 1em;
`

export const TopTweets = (props) => {
  const { userData } = props

  return (
    <Wrapper>
      {sortBy(userData.topTweets, [(o) => { return -(o.favorites + o.retweets) }]).map((tweet, i) => {
        return <TopTweet key={`top-tweet-${i}`} tweet={tweet} userData={userData} />
      })}
    </Wrapper>
  )
}
