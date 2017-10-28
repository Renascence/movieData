import React from 'react';
import { Link } from 'react-router';
import './home.less';

function MovieCard(props) {
  const { images, title } = props;
  return <div className='movieCard'>
      <img src={images.medium} />
    <p>{title}</p>
  </div>
}

export default MovieCard;
