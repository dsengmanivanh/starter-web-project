# Front End Starter pack

A barebones React app using webpack, sass and hot reloading.

## Demo

https://fierce-temple-30386.herokuapp.com/index.html

## Installation

```
$ npm install
```

## Running Locally

```
$ npm start
```

It is for dev environment and you can see some statistics with visualize (http://localhost:8080/statistics.html)


## Prod

```
$ npm run build
```

This command line create a dist with your bundle

## Add a new bundle

Add on webpack.common.js an entry and copy on plugins a new HtmlWebpackPlugin with your entry on chunks.

example:

new HtmlWebpackPlugin({
  template: "./src/new.html",
  filename: "./new.html",
  chunks: ['entry']
})

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```

## Vulnerabilities

```
$ npm update request --depth 3
```

It still 5 vulnerabilities with [node sass](https://github.com/sass/node-sass/issues/2355)

## Link

- [Atom](https://www.sitepoint.com/10-essential-atom-add-ons/)

- [Webpack](http://putaindecode.io/fr/articles/js/webpack/)
