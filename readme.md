# next-router-events

![npm version](https://img.shields.io/npm/v/next-router-events.svg)
![Licence](https://img.shields.io/npm/l/next-router-events.svg)
![Github issues](https://img.shields.io/github/issues/jaydenseric/next-router-events.svg)
![Github stars](https://img.shields.io/github/stars/jaydenseric/next-router-events.svg)

A more powerful Next.js router events API. The standard API can only handle one listener per router event (see [Next.js issue #2033](https://github.com/zeit/next.js/issues/2033)).

## Usage

Install with [npm](https://npmjs.com):

```
npm install next-router-events
```

To use router events:

```js
import routerEvents from 'next-router-events'

const logUrl = url => console.log(url)
const alertUrl = url => alert(url)

routerEvents.on('routeChangeComplete', logUrl)
routerEvents.once('routeChangeComplete', alertUrl)
routerEvents.off('routeChangeComplete', logUrl)
```

See `next` [router events](https://github.com/zeit/next.js#router-events) and `tiny-emitter` [instance methods](https://github.com/scottcorgan/tiny-emitter#instance-methods).

## Support

- Node.js: See `package.json` `engines`.
- Browsers: Market share [> 2%](http://browserl.ist/?q=%3E+2%25).
