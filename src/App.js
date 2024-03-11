import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import LocationBar from './components/LocationBar/LocationBar';
import Map from './components/Map/Map';
import address from './assets/constants.js';
import './styles/App.css';

function App() {
  const [addressData, setAddressData] = useState(address) 

  // const API_WEBSITE = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}`;

  // useEffect(() => {
  //   axios
  //     .get(`${API_WEBSITE}&ipAddress=192.212.174.101`)
  //     .then((response) => {
  //       return setAddressData(response.data);
  //     })
  // }, []);

  return (
    <>
      <Header />
      <LocationBar 
        addressInfo={addressData}
  />
      <Map 
        lat={addressData.location.lat}
        long={addressData.location.lng}
      />
    </>
  );
};

export default App;
