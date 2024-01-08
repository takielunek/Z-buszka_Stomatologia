import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    *{
       margin: 0 auto;
       padding: 0;
       box-sizing: border-box;
       font-family: 'Montserrat', sans-serif;
       font-family: 'Sacramento', cursive;
       max-width: 1600px;
       scroll-behavior: smooth;
    }

html {
    font-size: 62.5%;  
}

h1 {
    color: ${({ theme }) => theme.colors.black};
    font-size: 8rem;
    font-weight: 500;
    font-family: 'Sacramento', cursive;
      @media (max-width: 400px) {
  font-size: 5rem;
    }
    @media (min-width: 400px) and (max-width: 800px) {
      font-size: 6rem;
    }
    @media (min-width: 800px) and (max-width: 1300px) {
       font-size: 7rem;
    }
}

h2 {
    color: ${({ theme }) => theme.colors.textColor};
    font-family: 'Montserrat', sans-serif;
    font-size: 2.2rem;
    font-weight: 300;
    font-weight: 600;
      @media (max-width: 400px) {
  font-size: 1.6rem;
    }
    @media (min-width: 400px) and (max-width: 800px) {
      font-size: 1.8rem;
    }
    @media (min-width: 800px) and (max-width: 1300px) {
       font-size: 2rem;
    }
}

h3 {
    color: ${({ theme }) => theme.colors.black};
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
}

p {
    color: ${({ theme }) => theme.colors.black};
    font-size: 1.6rem;
    font-weight: 400;
}

a {
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.black};
    margin-right: 20px; 
    transition-duration: 600ms;
    &:hover {
        color: ${({ theme }) => theme.colors.darkGreen};
     }
}

li {
    list-style: none;
}


`;

export default GlobalStyle;
