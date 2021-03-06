# react-redux-starter-kit
[![Dependency Status](https://david-dm.org/LeoLeBras/react-redux-starter-kit.svg?style=flat)](https://david-dm.org/LeoLeBras/react-redux-starter-kit)
[![devDependency Status](https://david-dm.org/LeoLeBras/react-redux-starter-kit/dev-status.svg?style=flat)](https://david-dm.org/LeoLeBras/react-redux-starter-kit#info=devDependencies)

Get started with React.js and Redux.

## Requirements
- Node.js 5.x or newer

## Stack
- [React.js](https://facebook.github.io/react/) `^0.14.3` a javascript library for building user interfaces
- [React-Redux](http://rackt.github.io/redux/index.html) `^4.0.1` a predictable state container for Javascript apps
- [Babel](http://babeljs.io/) `6.x.x` for ES6+ support
- [Immutable](https://facebook.github.io/immutable-js/) Immutable persistent data collections for Javascript
- [Webpack](https://webpack.github.io/) module loader and bundler


## Getting started
Just clone the repo and start:
```shell
$ git clone https://github.com/LeoLeBras/react-redux-starter-kit.git myAwesomeApp
$ cd myAwesomeApp
$ npm i                         # Install Node.js components listed in ./package.json
```

##### How to use ?
```shell
$ npm start                     # or: env BABEL_ENV=development UV_THREADPOOL_SIZE=100 DEBUG=true NODE_ENV=DEV node server.js
```

This will start a lightweight development server (webpack dev server) with live reloading.

##### How to build for production ?
```shell
$ npm run build                 # or: env BABEL_ENV=production UV_THREADPOOL_SIZE=100 DEBUG=false NODE_ENV=PROD webpack
