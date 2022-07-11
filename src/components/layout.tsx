import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import gsap from 'gsap';
import GlobalStyle from '../imports/globalStyle';
import GridWrapper from './gridWrapper';
import IntroOverlay from './introOverlay';
import Nav from './nav';

interface Props {
  children: JSX.Element;
}

export default function Layout({ children }: Props) {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const tl = gsap.timeline();

    // prevent flashing
    gsap.to('body', { duration: 0, css: { visibility: 'visible' } });

    tl.from('.container h1', {
      duration: 1.8,
      delay: 1,
      ease: 'power4.out',
      y: 120,
      skewY: 7,
    })
      .to('.overlay-top', {
        duration: 1.6,
        stagger: 0.4,
        ease: 'expo.inOut',
        height: 0,
      })
      .to('.overlay-bottom', {
        width: 0,
        duration: 1.6,
        delay: -0.8,
        stagger: 0.4,
        ease: 'expo.inOut',
      })
      .to('#intro-overlay', {
        duration: 0,
        css: { display: 'none' },
      })
      .to('#nav-wrap', {
        duration: 0,
        css: { zIndex: 100 },
      })
      .to('#nav-btn', {
        duration: 0,
        css: { zIndex: 200 },
      });
  }, []);

  return (
    <>
      <Helmet>
        <html lang='en' />
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta name='description' content='Zach Cossman - Actor' />
        <title>Zach Cossman</title>
      </Helmet>
      <GlobalStyle />
      <GridWrapper>
        <IntroOverlay />
        <Nav />
        {children}
      </GridWrapper>
    </>
  );
}
