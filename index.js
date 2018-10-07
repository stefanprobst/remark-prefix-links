var path = require('path');
var visit = require('unist-util-visit');

module.exports = attacher;
attacher.withPrefix = visitor;

function attacher(pathPrefix) {
  if (!pathPrefix) return;

  return transformer;

  function transformer(tree) {
    visit(tree, ['link', 'definition'], function(node) {
      visitor(node, pathPrefix);
    });
  }
}

function visitor(node, pathPrefix) {
  if (node.url && !node.url.startsWith('#') && !isUrl(node.url)) {
    node.url = path.join(pathPrefix, node.url);
  }
  return node;
}

function isUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
