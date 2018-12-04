var emitter = require('tiny-emitter/instance')
var Router = require('next/router').default

var routerEvents = [
  'routeChangeStart',
  'beforeHistoryChange',
  'routeChangeComplete',
  'routeChangeError',
  'hashChangeStart',
  'hashChangeComplete'
]

routerEvents.forEach(function(event) {
  Router['on' + event[0].toUpperCase() + event.slice(1)] = function() {
    emitter.emit.bind(emitter, event).apply(null, arguments)
  }
})

module.exports = emitter
