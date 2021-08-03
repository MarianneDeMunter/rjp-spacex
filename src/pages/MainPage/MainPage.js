import React from 'react';
import './_mainPage.scss';
import Button from '@material-ui/core/Button';
import { School, Search, Explore } from '@material-ui/icons';

import Logo from '../../images/spacex-logo.png';

const MainPage = () => {
  return (
    <div className='mainContainer'>
      <div className='backImage' />
      <img className='logo' src={Logo} alt='logo' />
      <div className='title'>
        <h1>Welcome to the SpaceX Landingpage</h1>
        <div className='subTitle'>
          <h4>Learn</h4>
          <h4>Discover</h4>
          <h4>Explore</h4>
        </div>
        <div className='underLine' />
      </div>
      <div className='buttonBar'>
        <Button startIcon={<School />} variant='contained' href='/history'>
          History
        </Button>
        <Button startIcon={<Search />} variant='contained'>
          Launches
        </Button>
        <Button startIcon={<Explore />} variant='contained' href='/rockets'>
          Rockets
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
