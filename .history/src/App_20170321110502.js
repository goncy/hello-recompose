import React, { Component } from 'react';
import {withState, withHandlers} from 'recompose'
import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter'

@withState(
  'loaded',
  'changeState',
  'init'
)
class App extends Component {
  componentDidMount () {
    setTimeout(() => {
      this.props.changeState('success')
    }, 5000)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Counter status={this.props.loaded} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
