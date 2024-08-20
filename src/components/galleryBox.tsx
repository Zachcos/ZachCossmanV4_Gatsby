import React from 'react';
import styled from 'styled-components';

import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  padding: 60px 25px 0;
  position: relative;
`;

interface Props {
  area: string;
}

const GalleryBox = ({ area }: Props) => {
  return (
    <Wrapper style={{ gridArea: area }}>
      <LightGallery>this is a test</LightGallery>
    </Wrapper>
  );
};

export default GalleryBox;
