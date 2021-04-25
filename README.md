# Go Sourcemap JS

A library to send data about javascript exceptions to the [go-sourcemap](https://github.com/sampsonbryce/go-sourcemap) libary

## Usage

```js
import * as GoSourcemap from "go-sourcemap-js";

try {
  function div(a, b) {
    return a / b.myattribute.myattribute;
  }

  div(2, 0);
} catch (e) {
  GoSourcemap.captureException(e);
}

```