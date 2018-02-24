import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { connect } from 'react-redux';

class Rate extends React.Component {
  constructor(props) {
    super(props)
  }

  getOption = () => {
    const movies = this.props.movie.map(item => ({
      value: item.rating.average,
      name: item.title,
    })).sort((a, b) => b.value - a.value)
      .slice(0, 8).reverse();
    return {
      title: {
        text: '最受好评',
      },
      legend: {
        show: true,
        data: movies.map(item => item.name),
      },
      tooltip: {},
      yAxis: {
        data: movies.map(item => item.name),
        axisLabel: {
          inside: true,
          interval: 0,
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        z: 10
      },
      xAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#999'
          }
        }
      },
      series: [{
        type: 'bar',
        data: movies.map(item => item.value),
        itemStyle: {
          normal: { color: '#83bff6' }
        },
      }]
    };
  }

  render() {
    return (
      <ReactEcharts
        option={this.getOption()}
        notMerge={true}
        lazyUpdate={true}
      />
    )
  }
}


function mapStateToProps({ movie }) {
  return { movie };
}

export default connect(mapStateToProps)(Rate);
