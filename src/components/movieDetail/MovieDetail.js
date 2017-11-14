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
      directors: [],
      casts: [],
    };
  }

  async componentDidMount() {
    const data = await getMovieInfo(this.props.match.params.id);
    this.setState({ ...data });
  }

  render() {
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
        <div className="casts">
          <h3>导演</h3>
          {this.state.directors.map(item =>
            (<Link key={item.id} to={item.alt}>
              <img src={item.avatars.small} />
              <p>{item.name}</p>
            </Link>))}
          <h3>演员</h3>
          <div style={{ width: '100%', overflow: 'auto' }}>
            <div style={{ width: this.state.casts.length * 120 }}>
              {this.state.casts.map(item =>
                (
                  <Link key={item.id} to={item.alt} style={{ display: 'inline-block', width: 120 }}>
                    <img src={item.avatars.small} />
                    <p>{item.name}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
