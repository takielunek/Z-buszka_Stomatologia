import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollButton = () => {
  const backToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <ScrollButtonSection>
      <button className="scrollButton" type="button" onClick={backToTop}>
        <AiOutlineArrowUp />
      </button>
    </ScrollButtonSection>
  );
};

const ScrollButtonSection = styled.div`
  .scrollButton {
    background-color: ${({ theme }) => theme.colors.lightGreen};
    border: 1px solid ${({ theme }) => theme.colors.darkGreen};
    padding: 10px 10px 2px 10px;
    margin-top: 18px;
    cursor: pointer;
    transition-duration: 600ms;
    &:hover {
      background-color: ${({ theme }) => theme.colors.darkGreen2};
    }
  }
`;

export default ScrollButton;
