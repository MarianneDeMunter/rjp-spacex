import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card, CardContent, CardActions, Button } from '@material-ui/core';
import { Undo, Redo, Description } from '@material-ui/icons';
import PropTypes from 'prop-types';

const FlipCard = props => {
  const { date, title, article, details } = props;
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
      <Card className='cardContainer cardFront'>
        <CardContent className='cardContent'>
          <h2>{date}</h2>
          <h3>{title}</h3>
          <p>{details}</p>
        </CardContent>
        <CardActions className='bottomRow'>
          {article && (
            <Button
              size='small'
              startIcon={<Description />}
              href={article}
              className='readMore'
            >
              Read Article
            </Button>
          )}
          <Button
            size='small'
            startIcon={<Redo />}
            onClick={handleClick}
            className='flipButton'
          >
            FLIP OVER
          </Button>
        </CardActions>
      </Card>
      <Card className='cardContainer cardBack'>
        <CardContent className='cardContent'>
          <h4>{title}</h4>
          <p>{details}</p>
        </CardContent>
        <CardActions className='bottomRow'>
          {article && (
            <Button
              size='small'
              startIcon={<Description />}
              href={article}
              className='readMore'
            >
              Read Article
            </Button>
          )}
          <Button
            size='small'
            startIcon={<Undo />}
            onClick={handleClick}
            className='flipButton'
          >
            FLIP OVER
          </Button>
        </CardActions>
      </Card>
    </ReactCardFlip>
  );
};

FlipCard.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  article: PropTypes.string,
  details: PropTypes.string,
};

FlipCard.defaultProps = {
  date: '',
  title: '',
  article: '',
  details: '',
};

export default FlipCard;
