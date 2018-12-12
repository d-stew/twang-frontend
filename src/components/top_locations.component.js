import React from 'react'
import styled from 'styled-components'

import { navy } from '../style/colors'

const Wrapper = styled.div`
  h1 {
    font-size: 20px;
    border-bottom: 2px solid ${navy};
  }
`

const TopLocations = () => (
  <Wrapper>
    <h1>Top Locations</h1>
    <p>Denver, CO</p>
    <p>Los Angeles, CA</p>
    <p>San Francisco, CA</p>
    <p>Toronto, Canada</p>
    <p>Rio de Janiero, Brazil</p>
    <p>New York, NY</p>
  </Wrapper>
)

export default TopLocations
