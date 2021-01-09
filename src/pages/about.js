import React from 'react';
import styled from 'styled-components';
import AboutBox from '../components/aboutBox';

import headshot from '../../static/assets/headshot2.jpg';

export default function About() {
  return (
    <>
      <h2>This is the about page</h2>
      <AboutBox image={headshot} area="about" />
    </>
  );
}
