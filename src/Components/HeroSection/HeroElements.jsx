import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 800px;
  padding: 0 30px;
  background: #0c0c0c;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;
export const HeroBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
`;

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
  position: absolute;
  z-index: 3;
  padding: 8px 24px;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }

`;

export const HeroP = styled.p`
margin-top: 32px;
color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }

`;
