import React from 'react'
import {compose} from 'recompose'

import withCounter from '../../hocs/withCounter'
import loadable from '../../hocs/loadable'

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
  loadable,
  withCounter
)(Counter)
