import React from 'react';
import styled from 'styled-components';
import { color, font } from '../imports/variables';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'name name about'
    'current feature nav';
  min-height: 100vh;
  min-width: 100%;
`;

const NameBox = styled.div`
  background: ${color.med};
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: name;
  h1 {
    font-size: ${font.display};
    font-weight: 800;
    text-transform: uppercase;
  }
`;

export default function Home() {
  return (
    <GridWrapper>
      <NameBox>
        <h1>Zach Cossman</h1>
      </NameBox>
    </GridWrapper>
  );
}
