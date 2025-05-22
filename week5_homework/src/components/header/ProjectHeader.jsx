import { HeaderWrapper, Logo, Nav, NavItem } from "./ProjectHeader.styles";
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>IDT</Logo>
      <SearchBar />
      <Nav>
        <NavItem as={Link} to="/">About</NavItem>
        <NavItem as={Link} to="/project">Project</NavItem>
        <NavItem as={Link} to="/diary">Diary</NavItem>
        <NavItem>QnA</NavItem>
      </Nav>
    </HeaderWrapper>
  );
}
