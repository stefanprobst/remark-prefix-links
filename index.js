var path = require('path');
var visit = require('unist-util-visit');

module.exports = attacher;

function attacher(pathPrefix) {
  if (!pathPrefix) return;

  return transformer;

  function transformer(tree) {
    visit(tree, ['link', 'definition'], visitor);

    function visitor(node) {
      if (node.url && !node.url.startsWith('#') && !isUrl(node.url)) {
        node.url = path.join(pathPrefix, node.url);
      }
    }

    function isUrl(url) {
      try {
        new URL(url);
        return true;
      } catch {
        return false;
      }
    }
  }
}
