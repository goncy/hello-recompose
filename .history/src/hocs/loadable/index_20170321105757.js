import {branch, renderComponent, compose} from 'recompose'

export default {
  compose(
    branch(
      ({status}) => ['init', 'pending'].includes(status),
      renderComponent(() => <p>Loading</p>)
    )
  )
}
