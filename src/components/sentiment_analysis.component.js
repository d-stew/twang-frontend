import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { getSentimentData } from '../redux/actions/sentiment.actions'
import { sentimentMap } from '../redux/selectors/index.selectors'
import TopLocations from './top_locations.component'
import TopHashtags from './top_hashtags.component'
import { navy } from '../style/colors'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 1.5em 0 0 0;

  input {
    width: 300px;
    margin: 0 1em;
  }

  button {
    color: white;
    background: ${navy};
    padding: 6px 20px;
    border: none;
    border-radius: 2px;
  }
`

const LeftColumn = styled.div`
  width: 200px;
  margin-left: 1.5em;
`

export class SentimentAnalysis extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(keyword) {
    this.props.getSentimentData(keyword)
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <input placeholder="Enter a hashtag or keyword"></input>
          <button onClick={this.handleSubmit}>Get Sentiment Data</button>
        </Header>
        <LeftColumn>
          <TopLocations />
          <TopHashtags />
        </LeftColumn>
      </Wrapper>
    )
  }
}

export default connect(
  sentimentMap,
  {
    getSentimentData,
  }
)(SentimentAnalysis)
