import React from 'react'
import styled from 'styled-components'

import { navy } from '../style/colors'

const Wrapper = styled.div`
  margin: auto;

  h6 {
    font-size: 12px;
    color: ${navy};
    margin: 0.25em 0;
  }
`

const Labels = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  color: black;
`

const Label = styled.h4`
  font-size: 14px;
  font-weight: 300;
  margin: 0.25em 0;
`

const Thermometer = styled.div`
  display: flex;
  justify-content: center;  
`

const Block = styled.div`
  height: 25px;
  width: 40px;
  border: 1px solid ${navy};
  border-right: none;

  &:first-of-type {
    border-radius: 40px 0 0 40px;
  }

  &:nth-of-type(5) {
    border-right: 2px solid black;
  }
  
  &:last-of-type {
    border-right: 1px solid ${navy};
    border-radius: 0 40px 40px 0;
  }
`

export const SentimentThermometer = (props) => {
  const { score } = props

    return(
      <Wrapper>
        <h6>OVERALL SENTIMENT</h6>
        <Labels>
          <Label>Negative</Label>
          <Label>Neutral</Label>
          <Label>Positive</Label>
        </Labels>        
        <Thermometer>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
        </Thermometer>
      </Wrapper>
    )
}