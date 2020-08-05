import React from 'react';
import styled from 'styled-components';

import logo from '../images/logo.png';
import blobtop from '../images/bloptop.png';
import blobbot from '../images/blobbot.png';

const StyledSection = styled.section`
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

  position: relative;
`;

const Top = styled.div`
  height: 1fr;
  width: 100%;

  grid-row: 1/2;
  grid-column: 1/7;

  display: flex;
`;

const LogoContainer = styled.div`
  width: 50%;
  height: 100%;
`;

const LogoDiv = styled.div`
  margin: auto;

  width: 100px;
  height: 100px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const BlobContainer = styled.div`
  width: 50%;
  height: 100%;
`;

const BlobDiv = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${blobtop});
  background-repeat: no-repeat;
  background-size: contain;
`;

const Middle = styled.div`
  height: 1fr;
  width: 100%;

  grid-row: 2/3;
  grid-column: 2/6;
`;

const Title = styled.h1`
  color: #333;

  font-size: 4.1vw;
`;

const SubTitle = styled.h3`
  color: #333;

  font-weight: normal;
`;

const Orange = styled.span`
  color: #ffa012;
`;

const Bottom = styled.div`
  height: 1fr;
  width: 100%;

  grid-row: 3/4;
  grid-column: 1/7;
  background-image: url(${blobbot});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
`;

const A = () => {
  return (
    <StyledSection>
      <Top>
        <BlobContainer>
          <BlobDiv />
        </BlobContainer>

        <LogoContainer>
          <LogoDiv />
        </LogoContainer>
      </Top>
      <Middle>
        <Title>Advokat Charlotte Friis Bach Ryhl</Title>
        <SubTitle>
          specialiseret advokat inden for <Orange>konkurrenceret</Orange> og{' '}
          <Orange>udbudsret</Orange>
        </SubTitle>
      </Middle>
      <Bottom />
    </StyledSection>
  );
};

export default A;
