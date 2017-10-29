import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Rate } from 'antd';
import './home.less';

function MovieCard(props) {
  const { images, title, rating } = props;
  return (
    <div className="movieCard">
      <Link to="/">
        <img src={images.medium} alt={title} />
        <p>{title}</p>
        <Rate allowHalf value={rating.average / 2} />
      </Link>
    </div>
  );
}

MovieCard.propTypes = {
  images: PropTypes.objectOf(React.PropTypes.object).isRequired,
  rating: PropTypes.objectOf(React.PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieCard;
