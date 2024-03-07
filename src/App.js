import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import LocationBar from './components/LocationBar/LocationBar';
import Map from './components/Map/Map';
import './styles/App.css';

function App() {
  const [addressData, setAddressData] = useState(null)
  const [ipAddress, setipAddress] = useState('192.212.174.101');
  const [location, setlocation] = useState('Brooklyn, NY 10001');
  const [timezone, settimezone] = useState('UTC -05:00');
  const [isp, setisp] = useState('SPACEX Starlink');   

  const API_WEBSITE = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    axios
      .get(`${API_WEBSITE}&ipAddress=${ipAddress}`)
      .then((response) => {
        setAddressData(response.data);
        console.log(addressData.location)
      })
  }, []);
  
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
      <Map 
        lat={addressData.location.lat}
        long={addressData.location.lng}
      />
    </>
  );
}

export default App;
