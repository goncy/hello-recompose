import React from 'react'
import {withState, withHandlers, compose} from 'recompose'

const Counter = ({counter, increment, decrement}) => (
  <div>
    <p>
      {counter}
    </p>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </div>
)

export default compose(
  withState(
    'counter',
    'setCounter',
    0
  ),
  withHandlers({
    increment: ({setCounter}) => () => setCounter(n => n + 1),
    decrement: ({setCounter}) => () => setCounter(n => n - 1)
  })
)(Counter)
