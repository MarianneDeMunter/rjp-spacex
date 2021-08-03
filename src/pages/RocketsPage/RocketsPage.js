import React, { Component } from 'react';
import history from 'history/browser';
import './_rocketsPage.scss';
import { Link } from 'react-router-dom';

import {
  Button,
  IconButton,
  Card,
  CardContent,
  CardActions,
  CardMedia,
} from '@material-ui/core';
import { Explore, ArrowBackIos, ExpandLess } from '@material-ui/icons';

export default class RocketsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rocketList: [],
      popupRocket: [],
      popup: false,
    };
  }

  componentDidMount() {
    this.getRocketList();
  }

  getRocketList() {
    fetch('https://api.spacexdata.com/v4/rockets')
      .then(res => res.json())
      .then(result => {
        this.setState({ rocketList: result });
      });
  }

  handleScroll = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  render() {
    const { rocketList } = this.state;

    return (
      <div className='rocketContainer'>
        <div className='backImage' />
        <IconButton
          className='scrollButton'
          onClick={this.handleScroll}
          aria-label='scroll to top'
        >
          <ExpandLess />
        </IconButton>
        <div className='contentHeader'>
          <Button
            className='backLink'
            onClick={() => history.back()}
            variant='contained'
            startIcon={<ArrowBackIos />}
          />
          <div className='contentGrid'>
            <Explore />
            <div className='contentTitle'>
              <h2>Explore the SpaceX Rockets</h2>
              <h3>
                Click on any card to read more about your favorite SpaceX
                rocket.
              </h3>
            </div>
          </div>
          <hr />
        </div>
        <div className='cardFlex'>
          {rocketList.map(item => (
            <Link to={`/rockets/${item.id}`}>
              <Card className='cardContainer' key={item.id} id={item.id}>
                <div className='left'>
                  <CardContent className='cardContent'>
                    <h1>{item.name}</h1>
                  </CardContent>
                  <CardActions className='bottomRow'>
                    <Button
                      size='small'
                      startIcon={<Explore />}
                      className='popupButton'
                    >
                      Explore Rocket
                    </Button>
                  </CardActions>
                </div>
                <CardMedia
                  className='rocketImage'
                  image={item.flickr_images[0]}
                  title={item.name}
                />
              </Card>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
