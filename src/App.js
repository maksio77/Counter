import {Component} from 'react';

import './index.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  increaseCount = () => {
    let value = this.state.count + 1;
    this.setState({
      count: value
    });
  }

  reduceCount = () => {
    let value = this.state.count - 1;
    this.setState({
      count: value
    });
  }

  resetCount = () => {
    this.setState({
      count: 0
    });
  }
  
  render() {
    const {count} = this.state;

    return (
      <div className="App">
        <div>
          <h2>Counter:</h2>
          <h1>{count}</h1>
          <button onClick={this.reduceCount} className="minus">- Minus</button>
          <button onClick={this.resetCount} className="reset">Reset</button>
          <button onClick={this.increaseCount} className="plus">Plus +</button>
        </div>
      </div>
    );
  }
}

export default App;