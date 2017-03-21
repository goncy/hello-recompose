import React from 'react'
import {branch, renderComponent} from 'recompose'

export default branch(
  ({status}) => ['init', 'pending'].includes(status),
  renderComponent(() => <p>Loading</p>)
)
