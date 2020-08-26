import React from 'react';
import styled from 'styled-components';

import blobtop2 from '../images/blobtop2.png';
import blobbot2 from '../images/blobbot2.png';

const StyledSection = styled.section`
  height: 700px;
  width: 100vw;

  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-columns: 1fr;

  position: relative;
`;

const Top = styled.div`
  height: 1fr;
  width: 100%;

  grid-row: 1/2;
  grid-column: span;

  display: flex;
`;

const BlobContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const BlobDiv = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${blobtop2});
  background-repeat: no-repeat;
  background-size: contain;
`;

const Middle = styled.div`
  height: 2fr;
  width: 100%;

  grid-row: 2/3;
  grid-column: span;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.p`
  color: #333;

  font-weight: normal;

  text-align: left;

  font-size: 1em;
`;

const Bottom = styled.div`
  height: 1fr;
  width: 100%;

  grid-row: 3/4;
  grid-column: span;
  background-image: url(${blobbot2});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
`;

const sectionB = () => {
  return (
    <StyledSection>
      <Top>
        <BlobContainer>
          <BlobDiv />
        </BlobContainer>
      </Top>
      <Middle>
        <Paragraph>
          Jeg har en meget grundig teoretisk viden og betydelig praktisk
          erfaring inden for konkurrenceret og udbudsret samt fortolkning af
          alle EU-regler og -domme, idet jeg i snart 30 år har beskæftiget mig
          målrettet med disse tre områder som specialiseret advokat med
          sagsførelse for konkurrencemyndigheder og klagenævn, som referendar
          ved EU-Domstolen, som forfatter til omfattende faglige publikationer
          om konkurrenceret og andre emner inden for EU-retten og under studier
          ved Københavns Universitet, New York University School of Law og
          Europakollegiet i Brügge.
        </Paragraph>
      </Middle>
      <Bottom></Bottom>
    </StyledSection>
  );
};

export default sectionB;
