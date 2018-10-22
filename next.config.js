const withPlugins = require('next-compose-plugins');

const withCSS = require('@zeit/next-css');
const withMDX = require('@zeit/next-mdx')();
const withBlog = require('./next-blog')();

module.exports = withPlugins([withCSS, withMDX, withBlog], {
  pageExtensions: ['js', 'mdx'],
  exportPathMap: defaultPathMap => {
    // necessary?
    const pathMap = Object.assign({}, defaultPathMap);
    delete pathMap['/index'];
    return pathMap;
  }
});
