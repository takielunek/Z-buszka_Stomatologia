import { navLinks } from "../../index.js";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <div className="navbar-list">
        {navLinks.map((nav) => (
          <li key={nav.id}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  .navbar-list {
    display: flex;
    padding: 2.5rem 0;
    @media (max-width: 800px) {
      display: none;
    }
  }
`;

export default Navbar;
