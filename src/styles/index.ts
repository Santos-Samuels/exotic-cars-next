import styled from "styled-components";

export const GlobalStyle = styled.main`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
    max-width: 100vw;
    background-color: black;
  }

  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`;
