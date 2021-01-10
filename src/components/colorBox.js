import React from 'react';
import styled from 'styled-components';
import { color, font } from '../imports/variables';

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 45px 55px;
`;

export default function ColorBox({ area, bgColor }) {
  return <Wrapper style={{ gridArea: area, background: bgColor }} />;
}
