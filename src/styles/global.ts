import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --blue: #115D8C;
    --orange: #F25D27;
    --dark-blue: #123952;
    --gray: #617480;
    --gray-light: #A0ACB3;
    --white: #ffffff;
    --gray-transparent: #DCE2E6;
    --green: #51B853;
    --blue-low: #DDE9F0;
    --white-blue: #F5F8FA;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: var(--white-blue);
  }

  button{
    cursor: pointer;
  }

  html{
    @media(max-width: 1080px){
      font-size: 93.75%;
    }

    @media(max-width: 720px){
      font-size: 87.5%;
    }
  }

`;
