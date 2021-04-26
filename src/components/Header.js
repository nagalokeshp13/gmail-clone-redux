import React from 'react';
import { IconButton, Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './Header.css';
import gmailLogoImg from '../img/gmail-logo.jpg';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>

        <img src={gmailLogoImg} alt="gmail logo" />
      </div>

      <div className="header__middle">
        <SearchIcon />
        <input placeholder="search mail" type="text" />
        <ArrowDropDownIcon className="header__inputCaret" />
      </div>

      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>

        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <Avatar />
      </div>
    </div>
  );
}

export default Header;
