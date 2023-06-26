import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component="div">
          Like an Athlete Training
        </Typography>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/ease-in">Ease In</Link>
            </li>
            <li>
              <Link to="/step-up">Step Up</Link>
            </li>
            <li>
              <Link to="/all-in">All In</Link>
            </li>
            <li>
              <Link to="/healthy-habits">Healthy Habits</Link>
            </li>
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;