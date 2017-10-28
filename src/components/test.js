import React from 'react';


class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      keys: [0],
    }
  }

  onInputChange = (e, index) => {
    const list = this.state.list.slice();
    list[index] = e.target.value;
    this.setState({ list });
  }

  onInputRemove = (index) => {
    const list = this.state.list.slice();
    const keys = this.state.keys.slice();
    list.splice(index, 1);
    const order = keys.indexOf(index)
    keys.splice(order, 1)
    this.setState({ list, keys });
  }

  onInputAdd = () => {
    const list = this.state.list.slice();
    const keys = this.state.keys.slice();
    keys.push(keys[keys.length - 1] + 1)
    list.push(null)
    this.setState({ list, keys });
  }

  render() {
    const keys = this.state.keys;
    return <div>
      {this.state.list.map((item, index) => <div key={keys[index]}>
        <input onChange={(e) => this.onInputChange(e, index)} defaultValue={item} />
        <button onClick={() => this.onInputRemove(index)}>删除</button>
      </div>)}
      <button onClick={() => this.onInputAdd()}>添加</button>
    </div>
  }
}

export default Test