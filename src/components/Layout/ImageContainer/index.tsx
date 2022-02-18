import { Container } from "./styles";

interface IProps {
  margin?: string;
  height: string;
  width: string;
}

const ImageContainer: React.FC<IProps> = (props) => {
  return (
    <Container
      margin={props.margin ? props.margin : "0"}
      height={props.height}
      width={props.width}
    >
      {props.children}
    </Container>
  );
};

export default ImageContainer;
