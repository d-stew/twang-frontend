import React from 'react'
import styled from 'styled-components'

import { SkepticalBlob } from '../style/assets/blob_skeptical'
import {arctic, navy} from '../style/colors';

const Wrapper = styled.div`
  width: 90%;
  height: 100vh;
  margin: 0 1em;margin-top: 150px;
  text-align: center;

  div > h3 {
    color: ${navy};

    &:first-of-type {
      color: ${arctic};
    }
  }

`

export const TimingPatterns = (props) => {
  const { userData } = props

  return (
    <Wrapper>
      <div>
        <h3>HOLD TIGHT!</h3>
        <h3>Human said he'd be riiiiight back with this feature.</h3>
        <SkepticalBlob color={arctic} />
      </div>
    </Wrapper>
  )
}
