import React from 'react';
import styled from 'styled-components';
import Logomark from '../assests/Logomark.jpg';
import AboutUs from './AboutUs';

const Nav = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  display: flex;
  padding-left: 4rem;
`;
const RightSection = styled.div`
  display: flex;
  padding-right: 3rem;
`;

const Image = styled.img`
  height: 30px;
  width: 30px;
  padding-top: 12px;
`;

const H4 = styled.h4`
  margin-top: 16px;
  margin-left: 4px;
`;

const P = styled.p`
  margin-left: 2rem;
`;

const StyledButton = styled.button`
  background: #7f56d9;
  border: none;
  margin-left: 2rem;
  padding: 10px 24px;
  height: 36px;
  margin-top: 8px;
  color: white;
  border-radius: 8px;
  font-size: 14px;
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <LeftSection>
          <Image src={Logomark} alt='logo' />
          <H4>Untitled UI</H4>
          <P>Home</P>
          <P>Products</P>
          <P>Resources</P>
          <P>Pricing</P>
        </LeftSection>
        <RightSection>
          <P style={{ color: '#7f56d9' }}>Log in</P>
          <StyledButton>Sign up</StyledButton>
        </RightSection>
      </Nav>
      <AboutUs />
    </>
  );
};

export default Navbar;
