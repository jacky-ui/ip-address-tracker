import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import LocationBar from './components/LocationBar/LocationBar';
import Map from './components/Map/Map';
import './styles/App.css';

function App() {
  const [ipAddress, setipAddress] = useState('192.212.174.101');
  const [location, setlocation] = useState('Brooklyn, NY 10001');
  const [timezone, settimezone] = useState('UTC -05:00');
  const [isp, setisp] = useState('SPACEX Starlink');   
  
  let locationDefault = [
    {
        title: 'IP ADDRESS',
        locationInfo: ipAddress
    },
    {
        title: 'LOCATION',
        locationInfo: location
    },
    {
        title: 'TIMEZONE',
        locationInfo: timezone
    },
    {
        title: 'ISP',
        locationInfo: isp
    },
]

  return (
    <>
      <Header />
      <LocationBar 
        locationDefault={locationDefault}
      />
      <Map />
    </>
  );
}

export default App;
