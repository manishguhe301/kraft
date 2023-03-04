import React from 'react';
import styled from 'styled-components';
import MiddleSection from './MiddleSection';

const About = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const P = styled.p`
  margin: 0;
`;

const H1 = styled.h1`
  margin-top: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const AboutUs = () => {
  return (
    <>
      <About>
        <P style={{ color: '#7f56d9' }}>About us</P>
        <H1>About the company</H1>
        <P style={{ fontSize: '20px' }}>
          Learn more about the company and the team behind it.
        </P>
      </About>
      <MiddleSection />
    </>
  );
};

export default AboutUs;
