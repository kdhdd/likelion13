import { HeaderWrapper, Logo, Nav, NavItem } from "./Header.styles";
import { Link } from "react-router-dom"
import cart from "../assets/cart-shopping-solid.svg";
import magnifying from "../assets/magnifying-glass-solid.svg";
import barsIcon from "../assets/bars-solid.svg";

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo as={Link} to="/">KREAM</Logo>
      <Nav>
        <NavItem as={Link} to="/">Home</NavItem>
        <NavItem as={Link} to="/style">STYLE</NavItem>
        <NavItem as={Link} to="/shop">SHOP</NavItem>
        <NavItem as={Link} to="/search">
          <img src={magnifying} alt="돋보기" style={{ width: 24, height: 24 }} />
        </NavItem>
        <NavItem as={Link} to="/about">
          <img src={cart} alt="카트" style={{ width: 24, height: 24 }} />
        </NavItem>
        <NavItem as={Link} to="/about">
          <img src={barsIcon} alt="메뉴" style={{ width: 24, height: 24 }} />
        </NavItem>
      </Nav>
    </HeaderWrapper>
  );
}

