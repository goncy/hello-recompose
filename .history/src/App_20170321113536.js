import React, { Component } from 'react';
import {withState, compose, lifecycle, pure} from 'recompose'
import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter'

const App = ({loaded}) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <Counter status={loaded} />
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default compose(
  withState(
    'loaded',
    'changeState',
    'init'
  ),
  lifecycle({
    componentDidMount (props) {
      setTimeout(() => {
        this.props.changeState('success')
      }, 2000)
    }
  }),
  pure
)(App);
