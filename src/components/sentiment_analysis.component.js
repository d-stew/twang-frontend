import React, { Component } from 'react'
import styled from 'styled-components'

import RadarChart from './shared/radar_chart.component'
import { SentimentThermometer } from './sentiment_thermometer.component'
import { navy, arctic } from '../style/colors'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;  
`

const Header = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.25em;

  span {
    font-size: 18px;
    font-weight: 300;
    position: relative;
    color: ${navy};
    margin: 0 20px;  
    padding: 0 4px 4px;
    text-decoration: none;

    &.active:before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }

    &.inactive {
      color: lightgrey;
    }

    &.live:hover {
      cursor: pointer;
      color: ${navy};
    }

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${arctic};
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transition: all 0.2s ease-in-out 0s;
      transition: all 0.2s ease-in-out 0s;
    }

    &.live:hover:before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
`

const HeaderInput = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .placeholder {
    position: relative;
  }

  .placeholder::after {
    color: gray;
    position: absolute;
    left: 32px;
    top: 9px;
    content: attr(data-placeholder);
    pointer-events: none;
  }

  input {
    width: 300px;
    height: 35px;
    margin: 0 1em;
    padding: 20px 0;
    border: 1px solid lightgrey;
    border-radius: 25px;
    text-indent: 32px;

    ::placeholder {
      color: lightgrey;
      padding-left: 6px;
      text-indent: 0;
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

const ChartContainer = styled.div`
  height: 100vh;
  width: 90%;
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1 100%;
  padding: 15px;
  border-bottom: 2px solid lightgrey;

  svg {
    width: 250px !important;
    padding: 1em;
    border: 1px 1px 0 0 solid gray;
  }

  h4 {
    margin: 0.25em 0;
  }

  p {
    margin: 0;
  }

  &:last-of-type {
    border-bottom: none;  
  }
`

export default class SentimentAnalysis extends Component {
  state = {
    submodule: 'today'
  }

  getClasses(submodule) {
    if (submodule === 'realTime') {
      return 'inactive'
    }
    return this.state.submodule === submodule ? 'active' : 'live'
  }

  toggleSubmodule(submodule) {
    this.setState({ submodule })
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <span onClick={() => this.toggleSubmodule('today')} className={this.getClasses('today')}>TODAY</span>
          <span onClick={() => this.toggleSubmodule('month')} className={this.getClasses('month')}>THIS MONTH</span>
          <span onClick={() => this.toggleSubmodule('year')} className={this.getClasses('year')}>THIS YEAR</span>
          <span onClick={() => this.toggleSubmodule('realTime')} className={this.getClasses('realTime')}>REAL-TIME</span>
          <HeaderInput>
            <form className="placeholder" data-placeholder="#">
              <input type="text" />
              <button type="submit">Analyze Hashtag</button>
            </form>
          </HeaderInput>
        </Header>
        <ChartContainer>

          <Row>
            <RadarChart height={150} width={150} data={{
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
                    anger: 5,
                    disgust: 5,
                    fear: 5,
                    joy: 5,
                    sadness: 5,
                  },
                },
              ],
            }}/>
            <div>
              <h4>English</h4>
              <p>0 tweets</p>
            </div>
            <SentimentThermometer score={7.5} />
          </Row>

          <Row>
            <RadarChart height={150} width={150} data={{
              variables: [
                {key: 'anger', label: 'Anger'},
                {key: 'disgust', label: 'Disgust'},
                {key: 'fear', label: 'Fear'},
                {key: 'joy', label: 'Joy'},
                {key: 'sadness', label: 'Sadness'},
              ],
              sets: [
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
            }}/>
            <div>
              <h4>Spanish</h4>
              <p>0 tweets</p>
            </div>
            <SentimentThermometer score={7.5} />
          </Row>

          <Row>
            <RadarChart height={150} width={150} data={{
              variables: [
                {key: 'anger', label: 'Anger'},
                {key: 'disgust', label: 'Disgust'},
                {key: 'fear', label: 'Fear'},
                {key: 'joy', label: 'Joy'},
                {key: 'sadness', label: 'Sadness'},
              ],
              sets: [
                {
                  key: 'French',
                  label: 'French',
                  values: {
                    anger: 5,
                    disgust: 5,
                    fear: 5,
                    joy: 5,
                    sadness: 5,
                  },
                },
              ],
            }}/>
            <div>
              <h4>French</h4>
              <p>0 tweets</p>
            </div>
            <SentimentThermometer score={7.5} />
          </Row>

          <Row>
            <RadarChart height={150} width={150} data={{
              variables: [
                {key: 'anger', label: 'Anger'},
                {key: 'disgust', label: 'Disgust'},
                {key: 'fear', label: 'Fear'},
                {key: 'joy', label: 'Joy'},
                {key: 'sadness', label: 'Sadness'},
              ],
              sets: [
                {
                  key: 'Chinese (Mandarin)',
                  label: 'Chinese',
                  values: {
                    anger: 5,
                    disgust: 5,
                    fear: 5,
                    joy: 5,
                    sadness: 5,
                  },
                },
              ],
            }}/>
            <div>
              <h4>Mandarin</h4>
              <p>0 tweets</p>
            </div>
            <SentimentThermometer score={7.5} />
          </Row>  

        </ChartContainer>
      </Wrapper>    
    )
  }
}