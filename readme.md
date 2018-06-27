# next-router-events

[![Build status](https://travis-ci.org/jaydenseric/next-router-events.svg)](https://travis-ci.org/jaydenseric/next-router-events) [![npm version](https://img.shields.io/npm/v/next-router-events.svg)](https://npm.im/next-router-events)

A more powerful Next.js router events API. The standard API can only handle one listener per router event (see [zeit/next.js#2033](https://github.com/zeit/next.js/issues/2033)).

## Setup

To install [`next-router-events`](https://npm.im/next-router-events) from [npm](https://npmjs.com) run:

```
npm install next-router-events
```

## Usage

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
