## Webpack

#### Install

Initialize a **npm** package first if 'package.json' is not existed.

```bash
npm init
```

install **webpack**

```bash
npm i webpack -D
```



### Configure

[webpack/configure](https://webpack.js.org/configuration/)

A common version with babel 7.x.

But what is Node.js, what is webpack what is babel.

```javascript
const path = require("path")

module.exports = function(env) {
  return {
    entry: "./src/index.js",  //could be an object if needed
    output: {
      path: path.resolve(__dirname),
      filename: "min-jquery.js"
    },
    watch: env.mode === "development",
    module: {
      rules: [
        {
          test: /\.js/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        }
      ]
    }
  }
}
```

