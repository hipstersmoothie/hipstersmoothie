import React from 'react';
import App, { Container } from 'next/app';
import Layout from '../components/layout';
import BlogPost from 'next-mdx-blog/dist/components/post';
import posts from '../posts';

// Override the App class to put layout component around the page contents
// https://github.com/zeit/next.js#custom-app

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const { pathname } = this.props.router;

    let active;
    let post;

    // Wrap Blog posts in template
    if (pathname.includes('blog/')) {
      post = posts.find(post => post.urlPath === pathname);
    }

    if (pathname.includes('/projects')) {
      active = 'projects';
    } else if (pathname.includes('/blog')) {
      active = 'blog';
    }

    return (
      <Container>
        <Layout pathname={pathname} active={active}>
          {pathname.includes('blog/') ? (
            <BlogPost post={post} className="content">
              <Component {...pageProps} />
            </BlogPost>
          ) : (
            <Component {...pageProps} />
          )}
        </Layout>
      </Container>
    );
  }
}
