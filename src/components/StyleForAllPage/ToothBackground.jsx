import styled from "styled-components";
import tooth from "../../assets/icons/tooth.svg";

const ToothBackground = () => {
  return (
    <ToothSection>
      <img src={tooth} alt="Tooth icon" className="toothOne" />
      <img src={tooth} alt="Tooth icon" className="toothTwo" />
      <img src={tooth} alt="Tooth icon" className="toothThree" />
    </ToothSection>
  );
};


const ToothSection = styled.div`
  .toothOne {
    position: absolute;
    width: 200px;
    top: 350px;
    left: 25%;
    transform: rotate(-10deg);
    z-index: 1;
    @media (max-width: 1200px) {
      width: 100px;
      top: 350px;
      left: 25%;
    }
  }

  .toothTwo {
    position: absolute;
    width: 150px;
    top: 150px;
    left: 35%;
    transform: rotate(10deg);
    z-index: 1;
    @media (max-width: 1200px) {
      width: 150px;
      top: 150px;
      left: 65%;
    }
  }

  .toothThree {
    position: absolute;
    width: 100px;
    top: 650px;
    left: 10%;
    transform: rotate(10deg);
    z-index: 1;
    @media (max-width: 1200px) {
      display:  none;
    }
  }
`;

export default ToothBackground;
