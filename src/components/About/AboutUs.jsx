import bgAbout from "../../assets/bg-about.jpg";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <AboutUsSection id="about">
      <div
        className="aboutBg"
        style={{
          backgroundImage: `url(${bgAbout})`
        }}
      >
        <div className="aboutUsPadding">
          <h1 className="aboutUsHeading">O nas</h1>
          <h2 className="aboutUsText">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            accusantium recusandae exercitationem laboriosam quam fugiat.
            Voluptatibus sed totam ea, unde nulla voluptatum nam impedit saepe
            commodi, delectus ullam odit provident?
          </h2>
        </div>
      </div>
    </AboutUsSection>
  );
};

const AboutUsSection = styled.div`
  .aboutBg {
    width: 100%;
  
  }

  .aboutUsHeading,
  .aboutUsText {
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
  }

  .aboutUsPadding {
    padding: 250px;
    @media (max-width: 400px) {
      padding: 40px;
    }
    @media (min-width: 400px) and (max-width: 800px) {
      padding: 60px;
    }
    @media (min-width: 800px) and (max-width: 1300px) {
      padding: 100px;
    }
  }

  .aboutUsText {
    font-weight: normal;
  }
`;

export default AboutUs;
