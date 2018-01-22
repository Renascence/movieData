import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { connect } from 'react-redux';

class Pie extends React.Component {
  constructor(props) {
    super(props)
  }

  getOption = () => {
    return {
      title: {
        text: '热门电影'
      },
      tooltip: {},
      color: ['#F0A046', '#50B4E6', '#ccc', '#FFA07A', '#96DC00'],
      series: [{
        type: 'pie',
        data: this.props.movie.map(item => ({
          value: item.collect_count,
          name: item.title,
        })).sort((a, b) => b.value - a.value)
          .slice(0, 5)
      }]
    };
  }

  render() {
    return (
      <ReactEcharts
        option={this.getOption()}
        notMerge={true}
        type='pie'
        theme={"pie"}
        lazyUpdate={true}
      />
    )
  }
}


function mapStateToProps({ movie }) {
  return { movie };
}

export default connect(mapStateToProps)(Pie);
