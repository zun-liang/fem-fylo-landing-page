import styled from "styled-components";

import LogoSvg from "../assets/images/logo.svg";
import { Link, List } from "../assets/styles/stylecomponents";

const HeaderStyle = styled.header`
  padding: 2.5rem;
  background-color: var(--dark-blue1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 350px) {
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  @media (min-width: 900px) {
    padding: 4rem;
  }
`;
const Logo = styled.img`
  width: 6rem;
  @media (min-width: 600px) {
    width: 8rem;
  }
  @media (min-width: 1000px) {
    width: 10rem;
  }
`;
const Nav = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  @media (max-width: 250px) {
    flex-wrap: wrap;
  }
  @media (max-width: 350px) {
    margin-left: auto;
  }
  @media (min-width: 1000px) {
    gap: 3rem;
  }
`;
const MenuList = styled(List)`
  width: 4.5rem;
  text-align: center;
`;
const MenuLink = styled(Link)`
  &:hover,
  &:active {
    text-decoration: underline;
  }
`;

const Header = () => (
  <HeaderStyle>
    <Logo src={LogoSvg} alt="logo picture" />
    <Nav>
      <MenuList>
        <MenuLink href="#features">Features</MenuLink>
      </MenuList>
      <MenuList>
        <MenuLink href="#team">Team</MenuLink>
      </MenuList>
      <MenuList>
        <MenuLink href="#sign-in">Sign in</MenuLink>
      </MenuList>
    </Nav>
  </HeaderStyle>
);

export default Header;
