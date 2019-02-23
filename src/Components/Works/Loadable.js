/**
 * Asynchronously loads the component
 */
import React from 'react'
import Loadable from 'react-loadable'
import Loading from 'Components/LoadingIndicator'

const LoadableComponent = Loadable({
  loader: () => import('./index'),
  loading: Loading
})

export default LoadableComponent
