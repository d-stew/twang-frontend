import React, { PureComponent } from 'react'
import MapGL, { Marker } from 'react-map-gl'
import styled from 'styled-components'
import { isEmpty } from 'lodash'
import Loader from 'react-loaders'

import MapMarker from './map_pin.component'

require('dotenv').config({ path: '../../.env' })

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .loader {
    margin-bottom: 2em;
  }
`

const mapConfig = {
  center: [52.499219, 13.425416],
  zoom: 1
};

class ReactMapGL extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      popupInfo: null,
      viewport: {
        width: window.innerWidth,
        height: 600,
        latitude: mapConfig.center[0],
        longitude: mapConfig.center[1],
        zoom: mapConfig.zoom,
        isDragging: false,
        startDragLngLat: mapConfig.center,
        pitch: 0,
        bearing: 0
      }
    };

    this.onViewportChange = this.onViewportChange.bind(this)
  }

  onViewportChange(viewport) {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  }

  renderMarker = (location, index) => {
    console.log('MARKER!')
    return (
      <Marker key={`marker-${index}`} longitude={location.longitude} latitude={location.latitude}>
        <MapMarker size={20} onClick={() => this.setState({ popupInfo: location })} />
      </Marker>
    )
  }

  render() {
    const { viewport } = this.state
    const { keywordSet, locations } = this.props

    console.log('LOCATIONS', locations)

    if (!keywordSet && isEmpty(locations)) {
      return (
        <Wrapper>
          <p>Enter a search keyword above to view geographical data.</p>
        </Wrapper>
      )
    }

    if (keywordSet && isEmpty(locations)) {
      return (
        <Wrapper>
          <Loader type="ball-scale-ripple-multiple" color="white" style={{transform: 'scale(1.5)'}} />
          <p>Gathering Twitter Data...</p>
        </Wrapper>
      )
    }

    return (
      <div className="reactmapgl">
        <MapGL
          {...viewport}
          mapboxApiAccessToken='pk.eyJ1IjoiZHN0ZXciLCJhIjoiY2pwbWFieG8wMGtheDN4cDkxbWVraW9ucCJ9.FSyxc6JHbqOCYgy9EqKb4g'
          perspectiveEnabled
          onViewportChange={this.onViewportChange}
        >
          {locations.map(this.renderMarker)}
        </MapGL>
      </div>
    );
  }
}

export default ReactMapGL;