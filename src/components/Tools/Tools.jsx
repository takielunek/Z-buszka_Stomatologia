import bgTools from "../../assets/bg-tools.jpg";
import styled from "styled-components";

const Tools = () => {
  return (
    <PatientsSection>
      <div
        className="aboutBg"
        style={{
          backgroundImage: `url(${bgTools})`,
        }}
      >
        <div className="patientsPadding">
          <h1 className="patientsHeading">Najnowsze technologie</h1>
          <h2 className="patientsText">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            accusantium recusandae exercitationem laboriosam quam fugiat.
            Voluptatibus sed totam ea, unde nulla voluptatum nam impedit saepe
            commodi
          </h2>
        </div>
      </div>
    </PatientsSection>
  );
};

const PatientsSection = styled.div`
  .aboutBg {
    width: 100%;
  }

  .patientsHeading,
  .patientsText {
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
  }

  .patientsPadding {
    padding: 250px;
    @media (max-width: 400px) {
      padding: 50px;
    }
    @media (min-width: 400px) and (max-width: 800px) {
      padding: 60px;
    }
    @media (min-width: 800px) and (max-width: 1300px) {
      padding: 100px;
    }
  }

  .patientsText {
    font-weight: normal;
  }
`;

export default Tools;
