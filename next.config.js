const withPlugins = require('next-compose-plugins');

const withCSS = require('@zeit/next-css');
const withMDX = require('@zeit/next-mdx')();
const debug = process.env.NODE_ENV !== 'production';
const assetPrefix = debug ? '' : '/hipstersmoothie/';

// Generates Blog Index
const withBlog = require('next-mdx-blog').Plugin({
  assetPrefix,
  author: 'Andrew Lisowski',
  authorLink: 'https://github.intuit.com/alisowski',
  avatar: 'https://avatars2.githubusercontent.com/u/1192452?s=400&v=4'
});

module.exports = withPlugins([withCSS, withMDX, withBlog], {
  pageExtensions: ['js', 'mdx'],
  assetPrefix,
  publicRuntimeConfig: {
    assetPrefix
  }
});
