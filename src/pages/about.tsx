import React from 'react';
import styled from 'styled-components';
import { color, device, font } from '../imports/variables';
import PhotoBox from '../components/photoBox';
import DownloadBox from '../components/downloadBox';

import headshot from '../../static/assets/headshot2.jpg';

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
  .bio {
    h2 {
      font-size: ${font.heading};
      font-weight: ${font.bold};
      margin-bottom: 50px;
      text-transform: uppercase;
    }
    p {
      line-height: 1.4rem;
      max-width: 70ch;
    }
  }
  @media ${device.phone} {
    grid-area: 1 / 1 / 4 / 3;
  }
`;

export default function About() {
  const details = {
    heading: '',
    subheading: 'random facts',
    subnote: '',
  };

  return (
    <>
      <Wrapper>
        <div className="bio">
          <h2>About me.</h2>
          <p>
            Growing up in Fairfield, Ohio, Zach was exposed to music when he
            began taking drum lessons at the age of 10. His love for music
            evolved into a love for theatre, which led Zach to a four-year
            journey at Wright State University in the BFA Musical Theatre
            program.
            <br />
            <br />
            During his time there, he had the opportunity to be a part of
            several shows, such as Hairspray, Sweeney Todd, Titanic, RENT,
            Anything Goes, Little Women, Hello Dolly, and most memorably, Billy
            Lawlor in 42nd Street, and Leaf Coneybear in The 25th Annual Putnam
            County Spelling Bee.
            <br />
            <br />
            In the short time following his graduation, Zach had the opportunity
            to work on the world-premiere production of Revolution in the Elbow
            of Ragnar Agnarsson Furniture Painter Off-Broadway at the Minetta
            Lane theatre. Additionally, Zach has worked regionally at theatres
            such as Cincinnati Playhouse in the Park, Repertory Theatre of St.
            Louis, Bucks County Playhouse, Theatre Under the Stars, North
            Carolina Theatre, Casa Mañana, and many others.
          </p>
        </div>
      </Wrapper>
      <DownloadBox area="four" theme="dark" />
      <PhotoBox image={headshot} area="five" />
    </>
  );
}
