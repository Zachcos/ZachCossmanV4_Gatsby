import React from 'react';
import styled from 'styled-components';
import { color, device } from '../imports/variables';
import DownloadBox from '../components/downloadBox';
import TextBox from '../components/textBox';

const Wrapper = styled.div`
  align-items: center;
  background: ${color.light};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  grid-area: 1 / 1 / 3 / 3;
  justify-content: center;
  padding: 25px 50px;
  position: relative;
  z-index: 15;
  @media ${device.phone} {
    grid-area: 1 / 1 / 4 / 3;
  }
`;

export default function Media() {
  const details = {
    heading: 'Placeholder',
    subheading: 'something goes here',
    subnote: '',
  };

  return (
    <>
      <Wrapper>
        <h1>This will be the media page</h1>
      </Wrapper>
      <TextBox area="four" theme="medium" content={details} />
      <DownloadBox area="five" theme="dark" />
    </>
  );
}
