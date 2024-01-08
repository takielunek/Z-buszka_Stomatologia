import bgAbout from "../../assets/bg-patients.jpg";
import styled from "styled-components";


const Patients = () => {
  return (
    <PatientsSection>
      <div
        className="aboutBg"
        style={{
          backgroundImage: `url(${bgAbout})`,
        }}
      >
        <div className="patientsPadding">
        <h1 className="patientsHeading">Zaufało nam 5000 pacjentów</h1>
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
}

const PatientsSection = styled.div`
  .aboutBg {
    width: 100%;
  }

  .patientsHeading,
  .patientsText {
    color: white;
    text-align: center;
  }

  .patientsPadding {
    @media (max-width: 400px) {
      padding: 40px;
    }
    @media (min-width: 400px) and (max-width: 800px) {
      padding: 60px;
    }
    @media (min-width: 800px) and (max-width: 1300px) {
      padding: 100px;
    }
    @media (min-width: 1300px) {
      padding: 250px;
    }
  }

  .patientsText {
    font-weight: normal;
  }
`;

export default Patients




