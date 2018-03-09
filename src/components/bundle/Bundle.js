import React, { Component } from 'react';

class Bundle extends Component {
  constructor() {
    super()
    this.state = {
      mod: null
    }
  }

  componentDidMount() {
    this.props.load((mod) => {
      this.setState({
        mod: mod.default || mod
      })
    })
  }

  render() {
    return (
      this.state.mod ? this.props.children(this.state.mod) : null
    )
  }
}

export default Bundle;
