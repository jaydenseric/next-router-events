import Emitter from 'tiny-emitter'
import Router from 'next/router'

const emitter = new Emitter()
const methodEvents = {
  onRouteChangeStart: 'routeChangeStart',
  onRouteChangeComplete: 'routeChangeComplete',
  onRouteChangeError: 'routeChangeError',
  onBeforeHistoryChange: 'beforeHistoryChange',
  onAppUpdated: 'appUpdated'
}

Object.keys(methodEvents).forEach(method => {
  Router[method] = (...args) => emitter.emit(methodEvents[method], ...args)
})

export default emitter
