# react-starter-kit
A starter kit for made effective react.js webapp. Initially based on
[website-starter-kit](https://github.com/LeoLeBras/website-starter-kit.git) and
inspired by [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate.git).

## Install

Just [clone](github-windows://openRepo/https://github.com/LeoLeBras/react-starter-kit.git) the repo
and start :

```shell
$ git clone https://github.com/LeoLeBras/react-starter-kit.git myAwesomeApp
$ cd myAwesomeApp
$ npm install                   # Install Node.js components listed in ./package.json
```

### How to use dev mode ?

```shell
$ npm start                     # or: env UV_THREADPOOL_SIZE=100 node server.js
```

This will start a lightweight development server (webpack dev server) on **http://localhost:3000** (with live hot reloading).

### How to build for production ?

```shell
$ npm run build                # or: env UV_THREADPOOL_SIZE=100 BABEL_ENV=production webpack --production
```
(think to delete the comments of line 6 of the html file to see all styles of your app.)

## Documentation
Coming soon ...

## Roadmap
* Create a documentation
* Add redux-devtools
* Add react-router with a client-side routing approach
* Handle to a client-side and server-side webapp = universal (aka "isomorphic")
* Add thunk and promise middlewares
* Create examples
