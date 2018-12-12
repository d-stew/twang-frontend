import React from 'react'
import styled from 'styled-components'

import { navy } from '../style/colors'

const Wrapper = styled.div`
  h1 {
    font-size: 20px;
    border-bottom: 2px solid ${navy};
  }
`

const TopHashtags = () => (
  <Wrapper>
    <h1>Top Hashtags</h1>
    <p>#milehighcity</p>
    <p>#denverco</p>
    <p>#5280</p>
    <p>#coloradical</p>
    <p>#colorfulcolorado</p>
  </Wrapper>
)

export default TopHashtags
