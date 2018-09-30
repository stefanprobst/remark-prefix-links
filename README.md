# remark-prefix-links

Remark plugin to prefix relative links.

## Example

```js
const remark = require('remark');
const prefixLinks = require('remark-prefix-links');

const result = remark()
  .use(prefixLinks, '/prefix')
  .processSync('Look at [this example](/example).');

console.log(result.contents);
// Look at [this example](/prefix/example).
```
