import doctor from "../../assets/doctor.png";
import styled from "styled-components";
import StyledButton from "../StyleForAllPage/Buttons";
import ToothBackground from "../StyleForAllPage/ToothBackground";

const About = () => {
  return (
    <AboutSection>
      <div className="aboutSection">
        <div className="aboutText">
          <h1 className="heading">Klinika stomatologiczna</h1>
          <h2 className="text">Z naszej kliniki wyjdziesz z uśmiechem !</h2>
          <StyledButton className="button">Umów się na wizytę !</StyledButton>
        </div>
        <img src={doctor} alt="Pani stomatolożka" className="doctor" />
      </div>
      <ToothBackground />
    </AboutSection>
  );
};

const AboutSection = styled.div`
  .aboutSection {
    display: flex;
    margin: 50px 100px 100px 100px;
    @media (max-width: 1200px) {
      justify-content: space-around;
    }
  }

  .aboutText {
    z-index: 10;
    margin: 200px 0px;

    @media (max-width: 1200px) {
      margin: 0px;
      text-align: center;
    }
  }

  .text {
    margin-left: 30px;
    @media (max-width: 1200px) {
      margin-left: 0px;
    }
  }

  .doctor {
    z-index: 10;
    height: 600px;
    border: 4px solid ${({ theme }) => theme.colors.lightGreen};
    @media (max-width: 1200px) {
      display: none;
    }
  }

  .button {
    margin: 30px 0px 0px 100px;
    padding: 10px 20px;
    @media (max-width: 1200px) {
      margin: 30px 0 0 0;
    }
  }
`;

export default About;
