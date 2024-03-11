import { useState } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import LocationBar from './components/LocationBar/LocationBar';
import Map from './components/Map/Map';
import address from './assets/constants.js';
import './styles/App.css';

function App() {
  const [addressData, setAddressData] = useState(address); 

  const API_WEBSITE = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}`;

  const handleSubmitIp = ((ipvalue) => {
    axios
      .get(`${API_WEBSITE}&ipAddress=${ipvalue}`)
      .then((response) => {
        return setAddressData(response.data);
      })
  });

  return (
    <>
      <Header 
        submitFunction={handleSubmitIp}
      />
      <LocationBar 
        addressInfo={addressData}
    />
      <Map 
        latLong={addressData}
      />
    </>
  );
};

export default App;
