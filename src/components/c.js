import React from 'react';
import styled from 'styled-components';

import blobtop3 from '../images/blobtop3.png';
import blobbot3 from '../images/blobbot3.png';

const StyledSection = styled.section`
  height: 700px;
  width: 100vw;

  display: grid;
  grid-template-rows: 1fr 2fr 0.6fr;
  grid-template-columns: 1fr;

  position: relative;
`;

const TopColumn = styled.div`
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
  background-image: url(${blobtop3});
  background-repeat: no-repeat;
  background-size: contain;
`;

const MiddleColumn = styled.div`
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

const BottomColumn = styled.div`
  width: 100%;

  grid-row: 3/4;
  background-image: url(${blobbot3});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
`;

const sectionC = () => {
  return (
    <StyledSection>
      <TopColumn>
        <BlobContainer>
          <BlobDiv />
        </BlobContainer>
      </TopColumn>
      <MiddleColumn>
        <Paragraph>
          Jeg har haft mit eget advokatfirma siden 2007 og arbejder gerne som
          underleverandør til andre advokater, der frit bestemmer, om jeg skal
          optræde udadtil som specialiseret konsulent, antaget i den konkrete
          sag, eller fungere som anonym underleverandør af notater eller
          processkrifter, der underskrives af den advokat, som har
          klientrelationen. Under begge modeller forbliver klientforholdet og
          klientansvaret hos den advokat, som er min kunde, og som jeg
          fakturerer med forventning om, at mine ydelser viderefaktureres til en
          lidt højere timesats. Ansvaret for kvalitet og redelighed er
          selvfølgelig altid mit eget.
        </Paragraph>
      </MiddleColumn>
      <BottomColumn></BottomColumn>
    </StyledSection>
  );
};

export default sectionC;
