import React, { PureComponent } from 'react'
import MapGL, { Marker } from 'react-map-gl'
import MapPin from './map_pin.component'
import { isEmpty } from 'lodash'

require('dotenv').config({ path: '../../.env' })

const mapConfig = {
  center: [52.499219, 13.425416],
  zoom: 2
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
        pitch: 50,
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
    return (
      <Marker key={`marker-${index}`} longitude={location.longitude} latitude={location.latitude}>
        <MapPin size={20} onClick={() => this.setState({ popupInfo: location })} />
      </Marker>
    )
  }

  render() {
    const { viewport } = this.state
    const { locations } = this.props

    console.log('LOCATIONS', locations)

    if (isEmpty(locations)) {
      return (
        <div>Loading...</div>
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