# react-redux-starter-kit
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
Just [clone](github-windows://openRepo/https://github.com/LeoLeBras/react-native-redux-starter-kit.git) the repo
and start :
```shell
$ git clone https://github.com/LeoLeBras/react-native-redux-starter-kit.git myAwesomeApp
$ cd myAwesomeApp
$ npm i                         # Install Node.js components listed in ./package.json
```

##### How to use ?
```shell
$ npm start                     # or: env BABEL_ENV=development UV_THREADPOOL_SIZE=100 DEBUG=true NODE_ENV=DEV node server.js
```

This will start a lightweight development server (webpack dev server) with live reloading.
Then open `App.xcodeproj` in Xcode, build and run the project.
(support for android coming soon)

##### How to build for production ?
```shell
$ npm run build                 # or: env BABEL_ENV=production UV_THREADPOOL_SIZE=100 DEBUG=false NODE_ENV=PROD webpack
