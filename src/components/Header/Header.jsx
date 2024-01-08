import logo from "../../assets/logo.png";
import Navbar from "./Navbar";
import StyledButton from "../StyleForAllPage/Buttons";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <div className="logo">
        <img src={logo} alt="Obrazek ząbka" className="logoImg" />
        <h1 className="title">Zębuszka</h1>
      </div>
      <div className="nav">
        <Navbar />
        <StyledButton $primary className="button">Zaloguj się</StyledButton>
      </div>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  @media (max-width: 400px) {
    padding: 40px 40px;
  }
  @media (min-width: 400px) and (max-width: 800px) {
    padding: 40px 40px;
  }
  @media (min-width: 800px) and (max-width: 1300px) {
    padding: 40px 60px;
  }
  @media (min-width: 1300px) {
    padding: 40px 100px;
  }

  .logo {
    display: flex;
    margin: 0;
  }

  .title {
    font-size: 5rem;
  }

  .logoImg {
    height: 70px;
  }

  .nav {
    display: flex;
    margin: 0;
  }

  .button {
    @media (max-width: 460px) {
      display: none;
    }
  }
`;

export default Header;
