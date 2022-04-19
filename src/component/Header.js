import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Header.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function Header() {
  return (
    <div>
      <h1> Header</h1>
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
