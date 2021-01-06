import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyle from '../imports/globalStyle';

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Zach Cossman</title>
        <script
          src="https://kit.fontawesome.com/c3abb1e5c6.js"
          crossOrigin="anonymous"
        />
      </Helmet>
      <GlobalStyle />
      {children}
    </>
  );
}
