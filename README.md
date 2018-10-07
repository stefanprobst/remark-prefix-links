# remark-prefix-links

[Remark](https://remark.js.org/) plugin to prefix relative links.

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

## Tip

Instead of using this as a plugin, it is also possible to just import the `withPrefix` function. This can e.g. be useful when transforming Markdown to HTML: to save one tree traversal, use `withPrefix` in a `remark-rehype` `handler` function.
