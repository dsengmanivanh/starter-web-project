# Front End Starter pack

This is a sample projet with html, react, sass, hot reloading and build it by webpack.

## Sample


## Installation

npm install

## Launch

npm start

It is for dev environment and you can see some statistics with visualize (http://localhost:8080/statistics.html)


## Prod

npm run build

This command line create a dist

## Add a new bundle

Add on webpack.common.js an entry and copy on plugins a new HtmlWebpackPlugin with your entry on chunks.

example:

new HtmlWebpackPlugin({
  template: "./src/new.html",
  filename: "./new.html",
  chunks: ['entry']
})

## Link

*Atom*
https://www.sitepoint.com/10-essential-atom-add-ons/

*Webpack*
https://webpack.js.org/
