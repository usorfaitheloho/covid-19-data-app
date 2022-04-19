import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function Header() {
  return (
    <header className="header">
      <div className="left-header">
      <li>
          <Link to="/">
            <HomeOutlinedIcon className="icon" />
          </Link>
        </li>
      </div>
      <div className="middle-header">
      <li>
            <Link to="/">
               <h1 className="title">Covid watch</h1> 
            </Link>
        </li>
      </div>
      <div className="right-header">
      <li>
            <Link to="/">
                <SettingsOutlinedIcon className="icon" />
            </Link>
        </li>
      </div>
    </header>
  );
}
