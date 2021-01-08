import React from 'react';
import styled from 'styled-components';
import { color } from '../imports/variables';

const Wrapper = styled.div`
  align-items: center;
  background: ${color.dark};
  display: flex;
  height: 70px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 70px;
  .icon {
    width: 50%;
    span {
      background: ${color.light};
      border-radius: 10px;
      display: block;
      height: 3px;
      width: 30px;
      &:first-child {
        margin-bottom: 8px;
      }
      &:last-child {
        width: 23px;
      }
    }
  }
`;

export default function NavBtn() {
  return (
    <Wrapper>
      <div className="icon">
        <span />
        <span />
      </div>
    </Wrapper>
  );
}
