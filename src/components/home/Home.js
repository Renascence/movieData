import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import MovieCard from './MovieCard';


function App(props) {
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

App.propTypes = {
  movie: PropTypes.arrayOf(React.PropTypes.array).isRequired,
};

function mapStateToProps({ movie }) {
  return { movie };
}

export default connect(mapStateToProps)(App);
