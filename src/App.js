import React from 'react';
import {withState, compose, lifecycle, pure, onlyUpdateForKeys} from 'recompose'

import Counter from './components/Counter'

import logo from './logo.svg';
import './App.css';

const App = ({loaded}) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React and Recompose</h2>
      </div>
      <Counter status={loaded} />
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
  onlyUpdateForKeys(
    ['loaded']
  ),
  pure
)(App);
