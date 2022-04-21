import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setHeader } from '../redux/headerReducer';
import './Header.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function Header() {
  const dispatch = useDispatch();
  const headerState = useSelector((state) => state.header);
  const countriesState = useSelector((state) => state.countries);
  console.log('header_component', headerState.global_cases);
  const handleClick = (global_cases) => {
    dispatch(setHeader({ global_cases, img: 'https://mapsvg.com/static/maps/geo-calibrated/world.svg' }));
  };
  return (
    <div>
      <header>
        <nav>
          <Link to="/" onClick={() => handleClick(countriesState.global_cases)}>
            <i className="fas fa-home" />

          </Link>
          <strong> Covid-19 Data </strong>
          <div>
            <i className="fas fa-microphone" />
            <i className="fas fa-cog" />
          </div>
        </nav>
        {/* */}
        <div className='header_img' 
        style={{backgroundImage:`url(${headerState.img})`}} >  
        {/* <img src='https://mapsvg.com/static/maps/geo-calibrated/world.svg' alt='map' /> */}
        <strong style={{marginRight:'5%'}}> 
          {headerState.global_cases > 0 ? 'Total :'+headerState.global_cases: 'loading'}
        </strong>
        </div>
      </header>
      <section className="main">
        <Outlet />
      </section>
    </div>
    // <header className="header">
    //   <div className="left-header">
    //   <li>
    //       <Link to="/">
    //         <HomeOutlinedIcon className="icon" />
    //       </Link>
    //     </li>
    //   </div>
    //   <div className="middle-header">
    //   <li>
    //         <Link to="/">
    //            <h1 className="title">Covid watch</h1>
    //         </Link>
    //     </li>
    //   </div>
    //   <div className="right-header">
    //   <li>
    //         <Link to="/">
    //             <SettingsOutlinedIcon className="icon" />
    //         </Link>
    //     </li>
    //   </div>
    // </header>
  );
}
