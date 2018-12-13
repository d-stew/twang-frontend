import React from 'react'
import Radar from 'react-d3-radar'

const RadarChart = (props) => {
  return (
    <Radar
      width={props.width || 200}
      height={props.width || 200}
      padding={props.padding || 20}
      domainMax={props.domainMax || 10}
      highlighted={null}
      data={props.data}
      // onHover={(point) => {}}
    />
  )
}

export default RadarChart