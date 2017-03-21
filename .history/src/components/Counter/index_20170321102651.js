import React from 'react'
import {withState, withHandlers, compose} from 'recompose'

import withCounter from '../../hocs/withCounter'

const Counter = ({counter, increment, decrement}) => (
  <div>
    <p>
      {counter}
    </p>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </div>
)

export default withCounter(Counter)
