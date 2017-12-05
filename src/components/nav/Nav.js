import React from 'react';
import { connect } from 'react-redux';
import './nav.less'
import { Icon } from 'antd';
function getTitle(path) {
  if (path === '/') {
    return '正在上映';
  } else if (path.startsWith('/movieDetail')) {
    return '电影详情';
  }
}

function Nav(props) {
  const path = props.location.pathname;
  return (
    <div className="nav">
      {path !== '/' && <Icon type="left" className="back" onClick={() => window.history.back()} />}
      <h3>
        {getTitle(path)}
      </h3>
    </div>
  );
}

function mapStateToProps(state) {
  return { routing: state.routing };
}

export default (Nav);