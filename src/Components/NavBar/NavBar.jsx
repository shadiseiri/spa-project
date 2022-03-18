import React from "react";
import { Nav, NavBarContainer, NavLogo, MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink } from "./NavBarElements";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">MEGAJS</NavLogo>
          <MobileIcon>X</MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/courses">Courses</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/blog">Blog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks t0="/roadmap">Road Map</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign in</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
