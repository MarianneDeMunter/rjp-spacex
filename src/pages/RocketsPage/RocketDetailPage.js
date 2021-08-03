import React, { Component } from 'react';
import history from 'history/browser';
import './_rocketDetailPage.scss';

import { Button, IconButton, Card, CardContent } from '@material-ui/core';
import { ArrowBackIos, ExpandLess } from '@material-ui/icons';

export default class RocketDetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rocket: {},
      images: [],
    };
  }

  componentDidMount() {
    this.getRocket();
  }

  getRocket = () => {
    const { params } = this.props.match;

    fetch(`https://api.spacexdata.com/v4/rockets/${params.id}`)
      .then(res => res.json())
      .then(result => {
        this.setState({ rocket: result, images: result.flickr_images });
      });
  };

  handleScroll = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  render() {
    const { rocket, images } = this.state;

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
        </div>

        <Card className='rocketCard' key={rocket.id}>
          <CardContent>
            <h1>{rocket.name}</h1>
            <div className='imageFlex'>
              {images.map(item => (
                <img src={item} alt='' key={item} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}
