import React from 'react'
import {withState} from 'recompose'

const Counter = ({counter, setCounter}) => (
  <div>
    {'<Counter />'}
    {counter}
    <button onClick={() => setCounter(counter--)}>-</button>
    <button onClick={() => setCounter(counter++)}>+</button>
  </div>
)

export default withState(
  'counter',
  'setCounter',
  0
)(Counter)
