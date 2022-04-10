import styled from "styled-components";

export const InfoContainer = styled.div`
color: #fff;
background: ${({lightBg}) => (lightBg ? "#f9f9f9" : "#010606")} ;

@media screen and (max-width: 768px) {
    padding: 100px 0;
}

`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  align-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1"` : `"col1 col2"`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `"col2" "col1"` : `"col1" "col2"`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const TextWrapper = styled.div``;

export const TopLine = styled.h1``;

export const Heading = styled.h2``;

export const Subtitle = styled.p``;

export const BtnWrapper = styled.div``;
