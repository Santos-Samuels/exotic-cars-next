import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 90%;
  margin: 25px auto 0;
`;

export const StyledImage = styled.img`
  width: 100%;
  transition: all 0.3s;
  animation: go-back 1s;
  grid-area: car;
  justify-self: center;
  margin-bottom: 80px;

  @keyframes go-back {
    0% {
      transform: translateY(100px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media (min-width: 900px) {
    width: 60%;
    margin: 0;
  }
`;

export const ColorContainer = styled.div`
  text-align: center;
  grid-area: color;
  justify-self: end;

  @media (min-width: 900px) {
    align-self: flex-start;
  }
`;

export const StyledMain = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 30% 1fr;
  grid-template-areas:
    "back color"
    "car car";
  align-items: center;

  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const BackButton = styled.div`
  grid-area: back;
  justify-self: start;
`;
