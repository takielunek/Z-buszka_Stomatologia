import styled from "styled-components";
import { services } from "../../index.js";

const Services = () => {
  return (
    <ServicesSection id="services">
      <h1>Wykonujemy :</h1>
      <div className="services">
        {services.map((se) => (
          <div className="servicesBox">
            <img
              src={se.image}
              alt="Zdjęcie gabinetu stomatologicznego"
              className="servicesImg"
            />
           
              <h2 className="servicesTitle">{se.title}</h2>
           
          </div>
        ))}
      </div>
    </ServicesSection>
  );
};

const ServicesSection = styled.div`
  margin: 100px 0;

  h1 {
    text-align: center;
    margin-bottom: 50px;
  }

  .services {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .servicesBox {
    margin: 25px 0px;

    @media (min-width: 320px) and (max-width: 720px) {
      padding: 20px;
      border: 4px solid ${({ theme }) => theme.colors.lightGreen};
    }
    @media (min-width: 720px) and (max-width: 900px) {
      padding: 30px;
      border: 5px solid ${({ theme }) => theme.colors.lightGreen};
    }
    @media (min-width: 900px) and (max-width: 1200px) {
      padding: 30px;
      border: 6px solid ${({ theme }) => theme.colors.lightGreen};
    }
    @media (min-width: 1200px) {
      padding: 50px;
      border: 6px solid ${({ theme }) => theme.colors.lightGreen};
    }
  }

  .servicesImg {
    display: flex;
    justify-content: space-around;
    @media (max-width: 320px) {
      width: 230px;
    }
    @media (min-width: 320px) and (max-width: 900px) {
      width: 250px;
    }
    @media (min-width: 900px) and (max-width: 1050px) {
      width: 350px;
    }
    @media (min-width: 1050px) and (max-width: 1200px) {
      width: 400px;
    }
    @media (min-width: 1200px) and (max-width: 1500px) {
      width: 450px;
    }
    @media (min-width: 1500px) {
      width: 600px;
    }
  }

  .servicesTitle {
    text-align: center;
    margin: 20px 0;
  }
`;

export default Services;
