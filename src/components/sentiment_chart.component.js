import React from 'react'
import Loader from 'react-loaders'
import { isEmpty } from 'lodash'

import RadarChart from './shared/radar_chart.component'

export const SentimentChart = (props) => {
  const { sentimentData } = props

  if (isEmpty(sentimentData)) {
    return (
      <Loader type="ball-scale-ripple-multiple" color="white" style={{transform: 'scale(1.5)'}} />
    )
  }

  return (
    <RadarChart data={{
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
    }}/>
  )
}