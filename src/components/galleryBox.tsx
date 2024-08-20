import React from 'react';
import styled from 'styled-components';
import { color, font } from '../imports/variables';

import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';

const Wrapper = styled.div`
  background: ${color.accent};
  box-sizing: border-box;
  color: ${color.dark};
  display: flex;
  padding: 60px 25px 0;
  overflow: hidden;
  position: relative;
  .heading {
    font-size: ${font.heading};
    font-weight: ${font.bold};
    text-transform: uppercase;
  }
`;

interface Props {
  area: string;
}

const GalleryBox = ({ area }: Props) => {
  return (
    <Wrapper style={{ gridArea: area }}>
      <LightGallery>
        <h2 className='heading'>Headshots</h2>
      </LightGallery>
    </Wrapper>
  );
};

export default GalleryBox;
