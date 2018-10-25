// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import flushBlog from 'next-mdx-blog/dist/components/flush';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();

    return {
      html,
      head,
      errorHtml,
      chunks,
      styles: (
        <div>
          {flush()}
          {flushBlog()}
        </div>
      )
    };
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styles}
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
            integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://jenil.github.io/bulmaswatch/default/bulmaswatch.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/foundation.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
