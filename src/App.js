import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import LocationBar from './components/LocationBar/LocationBar';
import Map from './components/Map/Map';
import './styles/App.css';

function App() {
  const [addressData, setAddressData] = useState(null) 

  const API_WEBSITE = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    axios
      .get(`${API_WEBSITE}&ipAddress=${ipAddress}`)
      .then((response) => {
        setAddressData(response.data);
        console.log(addressData.location)
      })
  }, []);

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
}

export default App;
