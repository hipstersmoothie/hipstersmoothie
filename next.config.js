const withPlugins = require('next-compose-plugins');

const withCSS = require('@zeit/next-css');
const withMDX = require('@zeit/next-mdx')();
const withBlog = require('next-blog').Plugin();

module.exports = withPlugins([withCSS, withMDX, withBlog], {
  pageExtensions: ['js', 'mdx']
});
