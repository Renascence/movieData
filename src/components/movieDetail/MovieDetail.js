import React from 'react';
import { Link } from 'react-router-dom';
import { getMovieInfo } from '../../service';
import { getImageNameFromUrl } from '../../utils';
import './detail.less';

export default class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: {},
      title: '',
      genres: [],
      year: '',
      original_title: '',
      rating: {
        average: 0,
      },
      ratings_count: 0,
    };
  }

  async componentDidMount() {
    const data = await getMovieInfo(this.props.match.params.id);
    this.setState({ ...data });
  }

  render() {
    console.log('----', this.state);

    return (
      <div className="movieDetail">
        <div className="poster">
          <img src={`/img/${getImageNameFromUrl(this.state.images.large)}`} />
        </div>
        <div className="baseInfo">
          <div>
            <h3>{this.state.title}</h3>
            <p>{this.state.year}/{this.state.genres.join('/')}</p>
            <p>原名：{this.state.original_title}</p>
          </div>
          <div className="rate">
            <p>豆瓣评分</p>
            <p className="points">{this.state.rating.average}</p>
            <i className="ratings_count">{this.state.ratings_count}人</i>
          </div>
        </div>
        <p className="summary">简介：{this.state.summary}</p>

      </div>
    );
  }
}
