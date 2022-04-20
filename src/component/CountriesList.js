import React from 'react';
import './countrieslist.css';
import { Link } from 'react-router-dom';

const CountriesList = ({ ...props }) => {
  const { country, confirmed } = props;
  const link = '/' +country
  return (
    <div className="country_container">
      <Link to={link}><i className="fas fa-sign-in-alt" /></Link>
      <div>
        <h3>{country}</h3>
        <strong>{confirmed}</strong>
      </div>
    </div>
  );
}

// CountriesList.propTypes = {
//     country: propTypes.shape({
//         country: propTypes.string,
//         confirmed: propTypes.number,
//     }).isRequired,
// };

export default CountriesList;
