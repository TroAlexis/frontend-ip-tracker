import React from 'react';
import PropTypes from 'prop-types';

// Leaflet imports
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
// Import images and scss
import svgIcon from 'Images/icons/marker-icon-2x.svg';
import mShadow from 'leaflet/dist/images/marker-shadow.png'
import './map.module';

// Delete default icon and set custom icon.
// https://roblahoda.com/blog/leaflet-react-custom-icons/
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: svgIcon,
  iconUrl: svgIcon,
  iconSize: [ 46, 56 ],
  shadowUrl: mShadow,
});

const MyMap = ({ lat, lng, zoom }) => pug`
  - const position = [ lat, lng ]
    
  - const attribution = '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      
  Map(center=position zoom=zoom styleName="map")
    TileLayer(attribution=attribution url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
    Marker(position=position)
      Popup Here is the location :) #[br] Thanks for visiting!
  `;

MyMap.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  zoom: PropTypes.number,
};

MyMap.defaultProps = {
  lat: 51.505,
  lng: -0.09,
  zoom: 13,
};

export default MyMap;
