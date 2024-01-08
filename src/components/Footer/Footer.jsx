import logo from "../../assets/logo.png";
import Navbar from "../Header/Navbar";
import styled from "styled-components";
import ScrollButton from "../StyleForAllPage/ScrollButton";

const Footer = () => {
  return (
    <FooterSection>
      <div className="footer">
        <div className="logo">
          <img src={logo} alt="Obrazek ząbka" className="logoImg" />
          <h1 className="title">Zębuszka</h1>
        </div>
        <div className="nav">
          <Navbar />
          <ScrollButton />
        </div>
      </div>
      <div>
        <h3 className="createdBy">created by Karolina Jesionek</h3>
      </div>

      
    </FooterSection>
  );
};

const FooterSection = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGreen};

  .footer {
    display: flex;
    justify-content: space-between;
  
    @media (max-width: 400px) {
      padding: 40px 40px;
    }
    @media (min-width: 400px) and (max-width: 800px) {
      padding: 40px 60px;
    }
    @media (min-width: 800px) {
      padding: 40px 100px;
    }
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
    margin-right: 0;
  }

  .createdBy {
    text-align: center;
    padding: 30px;
  }
`;

export default Footer;
