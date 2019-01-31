import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { FaGlobeAmericas, FaHistory, FaUsers, FaRegChartBar } from 'react-icons/fa'

import MainNav from '../components/shared/main_nav.component'
import ReactMapGL from './map.component'
import RadarChart from './shared/radar_chart.component'
import { startSocket, subscribeToStream } from '../socket'
import { getSentimentData, updateAnalyticsData, killStream } from '../redux/actions/analytics.actions'
import { AnalyticsMap } from '../redux/selectors/index.selectors'
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
  display: flex;
  flex-direction: column;
  flex: 1 100%;
  justify-content: space-around;
  align-items: center;
  margin-left: 350px; 

  svg {
    max-height: 500px;
  }
`

const Sidebar = styled.div`
  position: absolute;
  left: 0;
  top: 100px;
  width: 250px;
  height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid lightgrey;
`

const SidebarItem = styled.div`
  width: 85%;
  margin: 0 1em;
  padding: 15px 0;
  border-bottom: 1px solid lightgrey;

  &:first-of-type {
    border-top: 1px solid lightgrey;
  }

  &:hover {
    cursor: pointer;
  }

  span {
    color: lightgrey;
    margin-left: 0.5em;
    font-size: 16px;
  }
`

export class SentimentAnalysis extends PureComponent {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    subscribeToStream((error, data) => {
      error ? this.props.killStream() : this.props.updateAnalyticsData(data.twitterData)
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
    startSocket()

    this.props.getSentimentData(this.state.keyword)
  }

  toggleModule(module) {
    this.setState({ currentModule: module })
  }

  render() {
    const { currentModule, twitterData, keywordSet } = this.state

    return (
      <Wrapper>
        <MainNav />
        <Sidebar>
            <SidebarItem onClick={() => this.toggleModule('sentiment')} className={this.getClasses('sentiment')}>
              <FaUsers color={'lightgrey'} size={'2em'} />
              <span>Sentiment Analysis</span>
            </SidebarItem>
            <SidebarItem onClick={() => this.toggleModule('geo')} className={this.getClasses('geo')}>
              <FaGlobeAmericas color={'lightgrey'} size={'2em'} />
              <span>Geographic Analysis</span>
            </SidebarItem>
            <SidebarItem onClick={() => this.toggleModule('history')} className={this.getClasses('history')}>
              <FaHistory color={'lightgrey'} size={'2em'} />
              <span>Historical Trends</span>
            </SidebarItem>
            <SidebarItem onClick={() => this.toggleModule('insights')} className={this.getClasses('insights')}>
              <FaRegChartBar color={'lightgrey'} size={'2em'} />
              <span>Data Insights</span>
            </SidebarItem>
        </Sidebar  >
        <MainModule>
          <Header>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter a hashtag or keyword" onChange={this.handleChange} />
                <button type="submit">Analyze Tweets</button>
            </form>
          </Header>
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
        {/* {tweets.map((tweet) => (
          <p key={tweet.username}>{tweet.text}</p>
        ))} */}
      </Wrapper>
    )
  }
}

export default connect(
  AnalyticsMap,
  {
    getSentimentData,
    updateAnalyticsData,
    killStream
  }
)(SentimentAnalysis)