const withPlugins = require('next-compose-plugins');

const withCSS = require('@zeit/next-css');
const withMDX = require('@zeit/next-mdx')();

module.exports = withPlugins([withCSS, withMDX], {
  pageExtensions: ['js', 'mdx'],
  exportPathMap: defaultPathMap => {
    // necessary?
    const pathMap = Object.assign({}, defaultPathMap);
    delete pathMap['/index'];
    return pathMap;
  }
});
