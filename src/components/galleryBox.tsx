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
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .heading {
    font-size: ${font.heading};
    font-weight: ${font.bold};
    margin-bottom: 20px;
    text-transform: uppercase;
  }
`;

const Placeholder = styled.div`
  background: darkred;
  width: 100px;
  height: 100px;
  display: inline-block;
  border: 1px solid black;
  margin: 0 10px 20px 0;
`;

interface Props {
  area: string;
}

const GalleryBox = ({ area }: Props) => {
  return (
    <Wrapper style={{ gridArea: area }}>
      <LightGallery>
        <h2 className='heading'>Headshots</h2>
        <div className='gallery'>
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </div>
      </LightGallery>
    </Wrapper>
  );
};

export default GalleryBox;
