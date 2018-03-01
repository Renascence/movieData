// 破解图片防盗链使用该组件
import React, { PropTypes } from 'react';

function Image(props) {
  return (
    props.url ?
      <img
        src={`http://localhost:8888/img?url=${props.url}`}
        alt={props.alt}
        {...props.style}
      />
      :
      <span>加载中</span>
  )
}

export default Image;
