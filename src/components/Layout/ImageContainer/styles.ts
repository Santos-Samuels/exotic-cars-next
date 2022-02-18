import styled from "styled-components";

interface IProps {
  margin?: string;
  height: string;
  width: string;
}

export const Container = styled.div<IProps>`
  position: relative;
  height: ${props => props.height};
  width: ${props => props.width};
  margin: ${props => props.margin};
`