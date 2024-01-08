import styled from "styled-components";
import { dentistry } from "../../index.js";
import { services } from "../../index.js";
import { FaPlus } from "react-icons/fa";


const Prices = () => {

const divClick = (e) => {
  const accordionContent = e.currentTarget.nextElementSibling;
  if (accordionContent.style.display == "block") {
    accordionContent.style.display = "none";
  } else {
    accordionContent.style.display = "block";
  }
};





  return (
    <PricesSection id="prices">
      <h1>Cennik:</h1>

      <div>
        {services.map((se) => (
          <div key={se.id}>
            <div className="accordion" onClick={divClick}>
              <div className="accordionTitle">
                <FaPlus className="plus" />
                <h2 className="boxName">{se.title}</h2>
              </div>
            </div>

            <div className="accordionContent">
              <table className="table ">
                <tr className="dentistryInfoName">
                  <h2 className="InfoName1">Usługa</h2>
                  <h2 className="InfoName">Cena</h2>
                </tr>
                {dentistry.map((de) => (
                  <tr key={de.id}  className="dentistryInfo">
                    <h2 className="InfoTitle">{de.title}</h2>
                    <h2 className="Info">{de.value}</h2>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        ))}
      </div>
    </PricesSection>
  );
};

const PricesSection = styled.div`
  @media (max-width: 400px) {
    margin: 50px 30px 100px;
  }
  @media (min-width: 400px) and (max-width: 800px) {
    margin: 50px 50px 100px;
  }
  @media (min-width: 800px) and (max-width: 1200px) {
    margin: 50px 100px 100px;
  }
  @media (min-width: 1200px) {
    margin: 50px 150px 100px;
  }

  tr:nth-of-type(even) {
    background-color: ${({ theme }) => theme.colors.lightGreen2};
  }

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  .accordion:hover {
    background-color: ${({ theme }) => theme.colors.lightGreen2};
  }

  .accordionTitle {
    display: flex;
    border: 4px solid ${({ theme }) => theme.colors.lightGreen};
    padding: 15px;
    margin: 10px 0;
    cursor: pointer;
    :hover {
      background-color: ${({ theme }) => theme.colors.lightGreen2};
    }
  }

  .boxName {
    margin: 0 0 0 20px;
  }

  .plus {
    font-size: 20px;
    margin: 4px 0 0 0;
    color: ${({ theme }) => theme.colors.textColor};
  }

  .accordionContent {
    display: none;
  }

  .active {
    display: block;
  }

  .table {
    padding: 30px 0px;
    width: 100%;
    @media (min-width: 550px) {
      width: 90%;
    }
  }

  .dentistryInfoName {
    display: flex;

    background-color: ${({ theme }) => theme.colors.lightGreen};
    padding: 10px;
  }

  .InfoName1 {
    width: 50%;
  }

  .InfoName1,
  .InfoName {
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
  }

  .dentistryInfo {
    display: flex;
    border: 1px solid ${({ theme }) => theme.colors.lightGreen};
    padding: 10px;
  }

  .InfoTitle {
    width: 60%;
    @media (min-width: 550px) {
      width: 70%;
    }
  }

  .InfoTitle,
  .Info {
    margin-left: 20px;
  }
`;

export default Prices;
