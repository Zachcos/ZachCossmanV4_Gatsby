/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { color, font, device } from '../imports/variables';

const NavWrapper = styled(motion.div)`
  align-items: center;
  background: ${color.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  min-width: 70px;
  min-height: 70px;
  position: fixed;
  top: 0;
`;

const NavIcon = styled(motion.div)`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 70px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 70px;
  .line-wrapper {
    width: 35px;
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

const LinksWrapper = styled(motion.div)`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  font-size: ${font.subheading};
  height: 50vh;
  justify-content: space-around;
  padding: 0 50px;
  position: relative;
  width: 66.666vw;
  z-index: 11;
  .link {
    color: ${color.light};
    text-transform: uppercase;
  }
  @media ${device.tablet} {
    flex-direction: column;
    height: 100vh;
    width: 100vw;
  }
  @media ${device.phone} {
    height: 100vh;
    padding: 50px 0;
  }
`;

export default function NavBtn() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.querySelector('html').style.overflow = 'hidden';
    } else if (!isOpen) {
      document.querySelector('html').style.overflow = 'auto';
    }
  }, [isOpen]);
  return (
    <AnimateSharedLayout>
      <NavWrapper layout id="nav-wrap">
        <NavIcon id="nav-btn" onClick={() => setIsOpen(!isOpen)}>
          <motion.div layout className="line-wrapper">
            <span />
            <span />
          </motion.div>
        </NavIcon>
        <AnimatePresence>{isOpen && <Menu />}</AnimatePresence>
      </NavWrapper>
    </AnimateSharedLayout>
  );
}

function Menu() {
  return (
    <LinksWrapper
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <div className="link">about</div>
      <div className="link">resume</div>
      <div className="link">media</div>
      <div className="link">contact</div>
    </LinksWrapper>
  );
}
