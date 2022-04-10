import React from "react";
import {Button} from '../ButtonElements'
import { Column1, InfoContainer, InfoRow, InfoWrapper, TextWrapper, TopLine , Heading, Subtitle, BtnWrapper} from "./InfoSectionElements";

const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>Topline</TopLine>
                <Heading>Heading</Heading>
                <Subtitle>Subtitle</Subtitle>
                <BtnWrapper>
                  <Button to='/Home'/>
                </BtnWrapper>
              </TextWrapper>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
