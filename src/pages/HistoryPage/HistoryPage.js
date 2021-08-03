import React, { Component } from 'react';
import history from 'history/browser';
import './_historyPage.scss';
import FlipCard from '../../components/FlipCard/FlipCard';

import { Button, IconButton } from '@material-ui/core';
import { School, ArrowBackIos, ExpandLess } from '@material-ui/icons';

export default class HistoryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      historyList: [],
    };
  }

  componentDidMount() {
    this.getHistoryList();
  }

  getHistoryList() {
    fetch('https://api.spacexdata.com/v4/history')
      .then(res => res.json())
      .then(result => {
        this.setState({ historyList: result });
      });
  }

  handleScroll = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  render() {
    const { historyList } = this.state;
    return (
      <div className='historyContainer'>
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
            <School />
            <div className='contentTitle'>
              <h2>Learn about the History</h2>
              <h3>
                Flip over any card to read more about a SpaceX Space Mission or
                read the linked article.
              </h3>
            </div>
          </div>
          <hr />
        </div>
        <div className='cardFlex'>
          {historyList.reverse().map(item => (
            <FlipCard
              date={item.event_date_utc.split('T')[0]}
              title={item.title}
              article={item.links.article}
              details={item.details}
            />
          ))}
        </div>
      </div>
    );
  }
}
