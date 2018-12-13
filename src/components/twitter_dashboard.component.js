import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { subscribeToStream } from '../socket'
import { getSentimentData, updateTwitterData, killStream } from '../redux/actions/twitter.actions'
import { TwitterMap } from '../redux/selectors/index.selectors'
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

export class SentimentAnalysis extends PureComponent {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    subscribeToStream((error, data) => {
      error 
        ? this.props.killStream()
        : this.props.updateTwitterData(data.twitterData)
    })
  }

  state = {
    keyword: '',
    twitterData: {
      count: 0,
      locations: {},
      languages: {},
      tweets: [],
    }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.twitterData !== prevProps.twitterData) {
      this.setState({ twitterData: this.props.twitterData })
    }
  }

  handleChange(event) {
    this.setState({ keyword: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('VaLUES', this.state.keyword)
    this.props.getSentimentData(this.state.keyword)
  }

  render() {
    const { tweets } = this.state.twitterData

    return (
      <Wrapper>
        <Header>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Enter a hashtag or keyword" onChange={this.handleChange}/>
            <button type="submit">Analyze Tweets</button>
          </form>
        </Header>
        <LeftColumn>
          <TopLocations />
          <TopHashtags />
        </LeftColumn> 
        {tweets.map(tweet => <p key={tweet.username}>{tweet.text}</p>)}
      </Wrapper>
    )
  }
}

export default connect(
  TwitterMap,
  {
    getSentimentData,
    updateTwitterData,
    killStream
  }
)(SentimentAnalysis)
