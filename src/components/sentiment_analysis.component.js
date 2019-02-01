import React from 'react'
import styled from 'styled-components'

import RadarChart from './shared/radar_chart.component'
import { SentimentThermometer } from './sentiment_thermometer.component'
import { arctic } from '../style/colors'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25em 2em;
  padding: 1.5em 0;

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
    text-indent: 30px;

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

const ChartRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      margin: 2.5em 2.5em 0.25em 2.5em;
      padding: 1em;
      border: 1px 1px 0 0 solid gray;
    }

    h4 {
      margin: 0.25em 0;
    }

    p {
      margin: 0;
    }
  }
`

const Chart = styled.div`
  padding: 15px;
`

export const SentimentChart = () => {
  return (
    <Wrapper>
      <Header>
        <form className="placeholder" data-placeholder="#">
          <input type="text" />
          <button type="submit">Analyze Hashtag</button>
        </form>
      </Header>
      <SentimentThermometer score={7.5} />
      <ChartRow>
        <Chart>
          <RadarChart height={185} width={185} data={{
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
          <h4>English</h4>
          <p>{0} tweets</p>
        </Chart>
        <Chart>
          <RadarChart height={185} width={185} data={{
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
          <h4>Spanish</h4>
          <p>{0} tweets</p>
        </Chart>
        <Chart>
          <RadarChart height={185} width={185} data={{
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
          <h4>French</h4>
          <p>{0} tweets</p>
        </Chart>
        <Chart>
          <RadarChart height={185} width={185} data={{
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
          <h4>Mandarin</h4>
          <p>{0} tweets</p>
        </Chart>
      </ChartRow>
    </Wrapper>    
  )
}