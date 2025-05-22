import { HeaderWrapper, Logo, Nav, NavItem } from "./Header.styles";
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>IDT</Logo>
      <Nav>
        <NavItem as={Link} to="/">About</NavItem>
        <NavItem as={Link} to="/project">Project</NavItem>
        <NavItem as={Link} to="/diary">Diary</NavItem>
        <NavItem>QnA</NavItem>
      </Nav>
    </HeaderWrapper>
  );
}
