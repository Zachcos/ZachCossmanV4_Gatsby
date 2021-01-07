import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyle from '../imports/globalStyle';
import GridWrapper from './gridWrapper';

export default function Layout({ children }) {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

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
      <GridWrapper>{children}</GridWrapper>
    </>
  );
}
