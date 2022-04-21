import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CountriesList from './CountriesList';
import './Home.css';

function Home() {
  const [countries, setCountries] = useState([]);
  const data = useSelector((state) => state.countries);
  console.log('from home', countries);
  return (
    <div className="home_container">

      <div className="home_country_list">
        {data.countries.map(
          (item) => (
            <CountriesList key={item.id} country={item} />
          ),
        )}
      </div>
    </div>

  );
}

export default Home;
