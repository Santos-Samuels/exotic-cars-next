import { Container } from "./styles";

interface IProps {
  image: string;
  imageId: number;
  isSelected: boolean;
}

const SlideCarItem: React.FC<IProps> = (props) => {
  return (
    <Container isSelected={props.isSelected}>
      <img src={props.image} alt="" />
    </Container>
  );
};

export default SlideCarItem;
