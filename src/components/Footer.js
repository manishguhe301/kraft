import React from 'react';
import styled from 'styled-components';
import Catalog from '../assests/catalog.png';
import Circooles from '../assests/circooles.png';
import Layers from '../assests/layers.png';
import Quotient from '../assests/quotient.png';
import Sisyphus from '../assests/sisyphus.png';

const FootSection = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  margin: 2rem;
`;

const Footer = () => {
  return (
    <FootSection>
      <p style={{ fontSize: '14px' }}>
        From startups to the world’s largest companies
      </p>
      <div>
        <Image src={Layers} alt='img' />
        <Image src={Sisyphus} alt='img' />
        <Image src={Circooles} alt='img' />
        <Image src={Catalog} alt='img' />
        <Image src={Quotient} alt='img' />
      </div>
    </FootSection>
  );
};

export default Footer;
