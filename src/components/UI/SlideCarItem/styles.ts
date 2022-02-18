import { colors } from "@shared/GlobalStyles/colors";
import styled from "styled-components";

export const Container = styled.article<{isSelected: boolean}>`
  color: ${colors.font};
  background: transparent linear-gradient(125deg, ${props => props.isSelected ? '#b7b9f2' : '#d5d5d5'} 0%, #d4d4d4 100%) 0% 0% no-repeat padding-box;
  border-radius: 10px;
  padding: 15px 10px;
  margin: 20px;
  transition: transform .5s;
  width: 70px;
  ${props => props.isSelected ? 'transform: scale(1.2);' : ''}

  & img {
    width: 80px;
  }

  @media (min-width: 1300px) {
    margin: 30px;
  }

  @media (min-width: 1100px) {
    width: 230px !important;

    & img {
      width: 300px !important;
    }
  }
  
  @media (min-width: 700px) {
    width: 130px;

    & img {
      width: 170px;
    }
  }
`