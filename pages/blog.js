import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import BlogIndex from 'next-mdx-blog/dist/components/list';

import postsData from '../posts';

// Dynamically import some components
postsData.forEach(post => {
  post.file = import('../pages' + post.filePath.replace('pages', ''));
});

const blogPage = ({ posts = postsData }) => (
  <div className="blog-index">
    <Head>
      <title>Blog Posts</title>
    </Head>

    <BlogIndex posts={postsData} stubClassName="content" />
  </div>
);

// Before page loads await the dynamic components. prevents blog preview page flash.
blogPage.getInitialProps = async () => {
  await Promise.all(
    postsData.map(async post => {
      post.BlogPost = (await post.file).default;

      return post;
    })
  );

  return { posts: [...postsData] };
};

export default blogPage;
