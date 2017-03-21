import {branch, renderComponent, compose} from 'recompose'

export default {
  branch(
    ({status}) => ['init', 'pending'].includes(status),
    renderComponent(() => <p>Loading</p>)
  )
}
