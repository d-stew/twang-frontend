import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { FaGlobeAmericas, FaHistory, FaUsers, FaRegChartBar } from 'react-icons/fa'

import ReactMapGL from './map.component'
import RadarChart from './shared/radar_chart.component'
import { subscribeToStream } from '../socket'
import { getSentimentData, updateTwitterData, killStream } from '../redux/actions/twitter.actions'
import { TwitterMap } from '../redux/selectors/index.selectors'
import { arctic } from '../style/colors'

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.75em 2em;

  input {
    width: 300px;
    height: 35px;
    margin: 0 1em;
    border: 1px solid lightgrey;
    border-radius: 2px;

    ::placeholder {
      color: lightgrey;
      padding-left: 6px;
    }
  } 

  button {
    color: white;
    background: ${arctic};
    padding: 6px 20px;
    border: none;
    border-radius: 2px;

    &:hover {
      cursor: pointer;
    }
  }
`

const MainModule = styled.div`
  svg {
    max-height: 500px;
  }
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 2em;
  border-top: 1px solid lightgrey;

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0.75em 0;
  }

  div > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
      &:hover {
        cursor: pointer;
      }
    }

    span {
      position: relative
      color: lightgrey;
      font-size: 18px;

      &:hover {
        cursor: pointer;
      }

    }

    &.active {
      span {
        color: turquoise;
        position: relative;

      }
      
      svg {
        fill: turquoise;
      }
    }
  }
`

export class SentimentAnalysis extends PureComponent {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    subscribeToStream((error, data) => {
      error ? this.props.killStream() : this.props.updateTwitterData(data.twitterData)
    })
  }

  state = {
    currentModule: 'sentiment',
    keyword: '',
    twitterData: {
      count: 0,
      locations: {},
      languages: {},
      tweets: []
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.twitterData !== prevProps.twitterData) {
      this.setState({ twitterData: this.props.twitterData })
    }
  }

  getClasses(module) {
    return module === this.state.currentModule ? 'active' : ''
  }

  handleChange(event) {
    this.setState({ keyword: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.setState({ keywordSet: true })

    this.props.getSentimentData(this.state.keyword)
  }

  toggleModule(module) {
    this.setState({ currentModule: module })
  }

  render() {
    const { currentModule, twitterData, keywordSet } = this.state

    return (
      <Wrapper>
        <Header>
          <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Enter a hashtag or keyword" onChange={this.handleChange} />
              <button type="submit">Analyze Tweets</button>
          </form>
        </Header>
        <MainModule>
          {currentModule === 'sentiment' && <RadarChart data={{
                variables: [
                  {key: 'anger', label: 'Anger'},
                  {key: 'disgust', label: 'Disgust'},
                  {key: 'fear', label: 'Fear'},
                  {key: 'joy', label: 'Joy'},
                  {key: 'sadness', label: 'Sadness'},
                ],
                sets: [
                  {
                    key: 'English',
                    label: 'English',
                    values: {
                      anger: 1,
                      disgust: 1,
                      fear: 1,
                      joy: 1,
                      sadness: 1,
                    },
                  },
                  {
                    key: 'Spanish',
                    label: 'Spanish',
                    values: {
                      anger: 5,
                      disgust: 5,
                      fear: 5,
                      joy: 5,
                      sadness: 5,
                    },
                  },
                ],
              }}/>}
              {currentModule === 'geo' && <ReactMapGL locations={twitterData.locations} keywordSet={keywordSet}/>}
        </MainModule>
        <Footer>
          <div>
            <div onClick={() => this.toggleModule('sentiment')} className={this.getClasses('sentiment')}>
              <FaUsers color={'lightgrey'} size={'2em'} />
              <span>Sentiment Analysis</span>
            </div>
            <div onClick={() => this.toggleModule('geo')} className={this.getClasses('geo')}>
              <FaGlobeAmericas color={'lightgrey'} size={'2em'} />
              <span>Geographic Analysis</span>
            </div>
            <div onClick={() => this.toggleModule('history')} className={this.getClasses('history')}>
              <FaHistory color={'lightgrey'} size={'2em'} />
              <span>Historical Trends</span>
            </div>
            <div onClick={() => this.toggleModule('insights')} className={this.getClasses('insights')}>
              <FaRegChartBar color={'lightgrey'} size={'2em'} />
              <span>Data Insights</span>
            </div>
          </div>
        </Footer  >
        {/* {tweets.map((tweet) => (
          <p key={tweet.username}>{tweet.text}</p>
        ))} */}
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
