import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import MovieCard from './MovieCard';
import './home.less';

function Home(props) {
  return (
    <div>
      <Row type="flex" gutter={8}>
        {
          props.movie.map(item =>
            <Col md={4} sm={6} xs={8} key={item.id} ><MovieCard {...item} /></Col>)
        }
      </Row>
    </div>
  );
}

Home.propTypes = {
  movie: PropTypes.objectOf(React.PropTypes.object).isRequired,
};

function mapStateToProps({ movie }) {
  return { movie };
}

export default connect(mapStateToProps)(Home);
