import React from "react";
import { FooterContainer, FooterLink, FooterLinksContainer, FooterLinksItem, FooterLinksWrapper, FooterLinkTitle, FooterWrap } from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinksItem>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="home">Home</FooterLink>
                <FooterLink to="courses">Courses</FooterLink>
                <FooterLink to="blog">Blog</FooterLink>
                <FooterLink to="roadmap">Road Map</FooterLink>
              </FooterLinksItem>
              <FooterLinksItem>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="home">Home</FooterLink>
                <FooterLink to="courses">Courses</FooterLink>
                <FooterLink to="blog">Blog</FooterLink>
                <FooterLink to="roadmap">Road Map</FooterLink>
              </FooterLinksItem>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinksItem>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="home">Home</FooterLink>
                <FooterLink to="courses">Courses</FooterLink>
                <FooterLink to="blog">Blog</FooterLink>
                <FooterLink to="roadmap">Road Map</FooterLink>
              </FooterLinksItem>
              <FooterLinksItem>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="home">Home</FooterLink>
                <FooterLink to="courses">Courses</FooterLink>
                <FooterLink to="blog">Blog</FooterLink>
                <FooterLink to="roadmap">Road Map</FooterLink>
              </FooterLinksItem>
            </FooterLinksWrapper>
          </FooterLinksContainer>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
