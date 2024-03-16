import React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMap = ({ apiKey, location }) => {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={location}
        defaultZoom={15}
      >
         <img src={process.env.PUBLIC_URL + 'images/marker.png'} alt="Pin Marker" style={{ width: '30px', height: '30px' }} />
      </GoogleMapReact>
    </div>
  );
};

const Marker = ({ text }) => <div style={{ color: 'red' }}>{text}</div>;

export default GoogleMap;
