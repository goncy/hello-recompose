import React from 'react'
import {withState, withHandlers, compose} from 'recompose'

const Counter = ({increment, decrement}) => (
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
    increment: ({counter, setCounter}) => setCounter(counter + 1),
    decrement: ({counter, setCounter}) => setCounter(counter - 1)
  })
)(Counter)
