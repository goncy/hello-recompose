import React from 'react'
import {withState} from 'recompose'

const Counter = () => (
  <div>{'<Counter />'}</div>
)

export default withState(
  'counter',
  'setCounter',
  0
)(Counter)
