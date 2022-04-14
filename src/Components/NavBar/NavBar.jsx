import React , {useEffect, useState} from "react";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";



const NavBar = ({ toggleHandler }) => {
const [scrollNav, setScrollNav] = useState(false)

const changeNav = () => {
if (window.scrollY >= 80) {
  setScrollNav(true)
} else {
  setScrollNav(false)
}
}

useEffect(() => {
  window.addEventListener('scroll', changeNav)

},[])





  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to="/">MEGAJS</NavLogo>
          <MobileIcon onClick={toggleHandler}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="courses">Courses</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="blog">Blog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="roadmap">Road Map</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="features">Features</NavLinks>
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
