import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/header.css';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#424242" }}>
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ color: "#FFEA00" }}>
          <b>
            <i>Like an Athlete Fitness</i>
          </b>
        </Typography>
        <nav>
          <ul className="navbar">
            <li>
              <Link to="/">
                <b>
                  <i>Home</i>
                </b>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <b>
                  <i>About</i>
                </b>
              </Link>
            </li>
            <li>
              <Link to="/ease-in">
                <b>
                  <i>Ease-In</i>
                </b>
              </Link>
            </li>
            <li>
              <Link to="/step-up">
                <b>
                  <i>Step-Up</i>
                </b>
              </Link>
            </li>
            <li>
              <Link to="/all-in">
                <b>
                  <i>All-In</i>
                </b>
              </Link>
            </li>
            <li>
              <Link to="/healthy-habits">
                <b>
                  <i>Healthy Habits</i>
                </b>
              </Link>
            </li>
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;