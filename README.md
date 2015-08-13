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

##### How to use dev mode ?

```shell
$ npm start                     # or: env UV_THREADPOOL_SIZE=100 DEBUG=true NODE_ENV=DEV node server.js
```

This will start a lightweight development server on **http://localhost:3000** with live hot reloading.


##### How to build for production ?

```shell
$ npm run build                # or: env BABEL_ENV=production UV_THREADPOOL_SIZE=100 DEBUG=false NODE_ENV=CHROME webpack
```


## Features
* React.js
* Redux
* Redux dev-tools
* React-router
* Live hot reloading with webopack-dev-server and react-hot-loader
