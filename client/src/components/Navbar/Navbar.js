import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Avatar, Typography, Button} from '@material-ui/core';
import { Link, useLocation, useHistory } from 'react-router-dom';
import decode from 'jwt-decode';
import {Image} from 'cloudinary-react';
import { ClassNames } from '@emotion/react';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import * as actionType from '../../constants/actionTypes';
import SettingsIcon from '@material-ui/icons/Settings';

import { useTranslation } from "react-i18next";


const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [user,setUser] = useState(JSON.parse(window.localStorage.getItem('profile')));
  const location = useLocation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [t, i18n] = useTranslation("global");
  const showSidebar = () => setSidebar(!sidebar);

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/');

    setUser(null);
  };


  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(window.localStorage.getItem('profile')));
  }, [location]);

  

  var googlepicture = "https://lh3.googleusercontent.com/a-/AOh14Gjm2Li8QycbjOF2nhLWUJGO1lbSrbTew_llLjFn=s96-c"
  //src={user.result.picture}


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar' >
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />   
          </Link>

          <div>

          <Typography  className={classes.tittle} variant="h6">NewStudent</Typography>
          <h1>{t("header.hello-world")}</h1>

          </div>
            <button onClick={() => i18n.changeLanguage("es")}>ES</button>
            <button onClick={() => i18n.changeLanguage("en")}>EN</button>
          <div>

          </div>

          <div>
            {user ? (
              <div className={classes.profile}>
              
                <Avatar alt={user.result.name} src={user.result.picture}></Avatar>
                <Typography  className={classes.userName} variant="h6">{user?.result.name} {user?.result.lastName}</Typography>

                <Button  onClick={logout}>
                  <SettingsIcon fontSize="large" style={{color : 'white'}}/>
                </Button>
          </div>

            ): (
              <Link to='/'>
              <button> {user?.result.name} </button>
              </Link>
            
            )}

          </div>
  
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;