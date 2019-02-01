import React from 'react'
import styled from 'styled-components'

import { SadBlob } from '../style/assets/blob_sad'
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


export const UserGrowth = (props) => {
  const { userData } = props

  return (
    <Wrapper>
      <div>
        <h3>SORRY, HUMAN!</h3>
        <h3>My developer forgot to feed me this code today.</h3>
        <SadBlob color={arctic} />
      </div>
    </Wrapper>
  )
}
