import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Carousel } from 'antd';
import MovieCard from './MovieCard';
import { updateMovies } from '../../actions/home';
import getRencentMovies from '../../service';
import Pie from '../charts/Pie';
import Rate from '../charts/Rate';

class Home extends React.Component {
  async componentDidMount() {
    if (!this.props.movie.length) {
      const data = await getRencentMovies();
      this.props.dispatch(updateMovies(data.subjects));
    }
  }

  render() {
    return (
      <div>
        <Carousel autoplay vertical>
          <div style={{ width: '100%' }}>
            <Pie />
          </div>
          <div style={{ width: '100%' }}>
            <Rate />
          </div>
        </Carousel>
        <Row type="flex" gutter={8}>
          {
            this.props.movie.map(item =>
              <Col md={4} sm={6} xs={8} key={item.id} ><MovieCard {...item} /></Col>)
          }
        </Row>
      </div>
    );
  }
}

Home.propTypes = {
  movie: PropTypes.objectOf(React.PropTypes.object).isRequired,
};

function mapStateToProps({ movie }) {
  return { movie };
}

export default connect(mapStateToProps)(Home);
