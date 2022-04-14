import React from "react";
import {
  FooterContainer,
  FooterLink,
  FooterLinksContainer,
  FooterLinksItem,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconsLink,
  SocialIconsWrapper,
  SocialLogo,
  SocialMediaContainer,
  SocialMediaWrapper,
  WebSiteRights,
} from "./FooterElements";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

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
          <SocialMediaContainer>
            <SocialMediaWrapper>
              <SocialLogo to='/'>ShadiSeiri</SocialLogo>
              <WebSiteRights>shadiseiri&copy;2022</WebSiteRights>
              <SocialIconsWrapper>
                <SocialIconsLink href="/">
                  <FaFacebook />
                </SocialIconsLink>
                <SocialIconsLink href="/">
                  <FaYoutube />
                </SocialIconsLink >
                <SocialIconsLink href="/">
                  <FaInstagram/>
                </SocialIconsLink>
                <SocialIconsLink href="/">
                  <FaTwitter />
                </SocialIconsLink>
              </SocialIconsWrapper>
            </SocialMediaWrapper>
          </SocialMediaContainer>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
