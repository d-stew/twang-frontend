import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { FaGlobeAmericas, FaHistory, FaUsers, FaRegChartBar } from 'react-icons/fa'

import MainNav from '../components/shared/main_nav.component'
import UserInsights from '../components/user_insights.component'
import ReactMapGL from './map.component'
import { startSocket } from '../socket'
import { getSentimentData, updateAnalyticsData, killStream } from '../redux/actions/analytics.actions'
import { AnalyticsMap } from '../redux/selectors/index.selectors'
import { arctic, turquoise } from '../style/colors'
import {SentimentChart} from './sentiment_chart.component';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const MainModule = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1 100%;
  justify-content: space-around;
  align-items: center;
  margin-left: 250px;

  svg {
    max-height: 500px;
  }
`

const Sidebar = styled.div`
  position: absolute;
  left: 0;
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 115px 0 0 10px;
  background: ${arctic};
`

const SidebarItem = styled.div`
  color: white;
  width: 100%;
  margin: 0 1em;
  padding: 15px 0 15px 20px;
  border-radius: 50px 0 0 50px; 

  &:hover {
    cursor: pointer;
  }

  &.active {
    background: white;

    svg {
      color: ${turquoise} !important;
    }
    
    span {
      color: ${turquoise};
    }
  }

  span {
    color: white;
    margin-left: 0.5em;
    font-size: 16px;
  }
`

export class SentimentAnalysis extends PureComponent {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    // subscribeToStream((error, data) => {
    //   error ? this.props.killStream() : this.props.updateAnalyticsData(data.twitterData)
    // })
  }

  state = {
    currentModule: 'insights',
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
    const { currentModule, twitterData, sentimentData, keywordSet } = this.state

    console.log('currentModule', currentModule)

    return (
      <Wrapper>
        <MainNav />
        <Sidebar>
            <SidebarItem onClick={() => this.toggleModule('insights')} className={this.getClasses('insights')}>
              <FaRegChartBar color={'white'} size={'2em'} />
              <span>User Insights</span>
            </SidebarItem>
            <SidebarItem onClick={() => this.toggleModule('sentiment')} className={this.getClasses('sentiment')}>
              <FaUsers color={'white'} size={'2em'} />
              <span>Sentiment Analysis</span>
            </SidebarItem>
            <SidebarItem onClick={() => this.toggleModule('geo')} className={this.getClasses('geo')}>
              <FaGlobeAmericas color={'white'} size={'2em'} />
              <span>Geographic Analysis</span>
            </SidebarItem>
            <SidebarItem onClick={() => this.toggleModule('history')} className={this.getClasses('history')}>
              <FaHistory color={'white'} size={'2em'} />
              <span>Historical Trends</span>
            </SidebarItem>
        </Sidebar  >
        <MainModule>
          {currentModule === 'insights' && <UserInsights userData={twitterData} />}
          {currentModule === 'sentiment' && <SentimentChart sentimentData={sentimentData} />}
          {currentModule === 'geo' && <ReactMapGL locations={twitterData.locations} keywordSet={keywordSet}/>}
        </MainModule>
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
