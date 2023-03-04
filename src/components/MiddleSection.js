import React from 'react';
import styled from 'styled-components';
import image from '../assests/Image.png';
import Footer from './Footer';

const MainSection = styled.div`
  height: 400px;
`;

const Middle = styled.div`
  padding: 2rem;
  height: 350px;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  height: 100%;
  margin-left: 4rem;
`;

const RightSection = styled.div`
  margin-left: 4rem;
`;

const P = styled.p`
  color: #7f56d9;
  margin: 0;
  font-weight: 600;
`;

const H1 = styled.h1`
  margin-top: 12px;
  width: 446px;
`;

const StyledText = styled.p`
  font-size: 50px;
  font-weight: 600;
  margin: 0;
  color: #7f56d9;
`;

const Section = styled.div`
  display: flex;
`;
const Right = styled.div`
  margin-left: 3rem;
`;

const MiddleSection = () => {
  return (
    <>
      <MainSection>
        <Middle>
          <Image src={image} alt='img' />
          <RightSection>
            <P>We’ve helped hundreds of companies</P>
            <H1>We’re only just getting started on our journey</H1>
            <Section>
              <div>
                <StyledText>400+</StyledText>
                <p>Projects completed</p>
              </div>
              <Right>
                <StyledText>600%</StyledText>
                <p>Return on investment</p>
              </Right>
            </Section>
            <Section>
              <div>
                <StyledText>10k</StyledText>
                <p>Global downloads</p>
              </div>
              <Right>
                <StyledText>200+</StyledText>
                <p>5-star reviews</p>
              </Right>
            </Section>
          </RightSection>
        </Middle>
      </MainSection>
      <Footer />
    </>
  );
};

export default MiddleSection;
