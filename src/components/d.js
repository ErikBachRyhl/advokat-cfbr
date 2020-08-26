import React from 'react';
import styled from 'styled-components';

import logo from '../images/logo.png';
import blobtop4 from '../images/blobtop4.png';
import footerblob from '../images/footerblob.png';

const StyledSection = styled.section`
  height: 1100px;
  width: 100vw;

  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
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

const BlobTopContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const BlobTopDiv = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${blobtop4});
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

const Orange = styled.span`
  color: #ffa012;
`;

const BottomColumn = styled.div`
  width: 100%;

  grid-row: 3/4;
  background-image: url(${footerblob});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
`;

const sectionD = () => {
  return (
    <StyledSection>
      <TopColumn>
        <BlobTopContainer>
          <BlobTopDiv />
        </BlobTopContainer>
      </TopColumn>
      <MiddleColumn>
        <Paragraph>
          Friis Bach Ryhl advokatfirma er et enkeltmandsfirma under CVR-nummer
          21 95 02 46, som jeg driver fra min bopæl Skolegyden 6, 4000 Roskilde.
          Jeg har tegnet sædvanlig advokatansvarsforsikring og garantiordning
          hos dahlberg assurance agentur A/S. Forsikringen dækker al
          advokatvirksomhed udøvet af mig, uanset hvor den udøves. Jeg anvender
          ikke aftaleklausuler om lovvalg og/eller værneting. Jeg er beskikket
          af Justitsministeriet og omfattet af retsplejelovens regler om god
          advokatskik. Jeg er en del af Advokatsamfundet og omfattet af de
          advokatetiske regler og Advokatsamfundets tilsyns- og
          disciplinærsystem (www.advokatsamfundet.dk). Klager over salær eller
          adfærd udøvet af mig kan indgives til Advokatnævnet, Kronprinsessegade
          28, 1306 København K (www.advokatnaevnet.dk). Jeg er medlem af Dansk
          Forening for Europaret, Dansk Forening for Konkurrenceret og Dansk
          Forening for Udbudsret. Jeg kan kontaktes på telefon{' '}
          <Orange>(+45) 4054 1912</Orange>
          eller e-mail <Orange>charlotte@friisbachryhl.dk</Orange>.
        </Paragraph>
      </MiddleColumn>
      <BottomColumn></BottomColumn>
    </StyledSection>
  );
};

export default sectionD;
