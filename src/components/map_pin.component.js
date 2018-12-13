import React, {PureComponent} from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'

const pinStyle = {
  cursor: 'pointer',
  fill: 'black',
  stroke: 'black'
};

export default class MapMarker extends PureComponent {

  render() {
    const {size = 20} = this.props;

    return (
      <FaMapMarkerAlt color={'black'} size={20} />
    );
  }
}