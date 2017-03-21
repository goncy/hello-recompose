import React from 'react'
import {withState} from 'recompose'

const Counter = ({counter, setCounter}) => (
  <div>
    <p>
      {counter}
    </p>
    <button onClick={() => setCounter(counter - 1)}>-</button>
    <button onClick={() => setCounter(counter + 1)}>+</button>
  </div>
)

export default withState(
  'counter',
  'setCounter',
  0
)(Counter)
