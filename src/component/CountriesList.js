import React from 'react';
import './countrieslist.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setRegions } from '../redux/regionReducer';

const CountriesList = ({ ...props }) => {
 const dispatch = useDispatch()
  const { country} = props;
  const link = '/' +country.id
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
