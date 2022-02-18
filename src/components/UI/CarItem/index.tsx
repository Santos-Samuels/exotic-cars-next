import { Container, PriceContent } from "./styles";
import { ICar } from "@shared/interfaces";
import { colors } from "@shared/GlobalStyles/colors";
import { useRouter } from "next/router";
import { ImageContainer } from "@components/index";
import Image from "next/image";

interface IProps {
  car: ICar;
}

const CarItem: React.FC<IProps> = ({ car }) => {
  const router = useRouter();
  
  return (
    <Container onClick={() => router.push(`/car/${car.id}`)}>
      <div>
        <h4>{car.beand}</h4>
        <p>{car.model}</p>
      </div>

      {/* <img src={car.image} alt={car.beand} /> */}
      <ImageContainer width="200px" height="200px">
          <Image
            loader={() => car.image}
            src={car.image}
            alt={car.beand + " logo"}
            layout="fill"
            objectFit="contain"
          />
        </ImageContainer>

      <PriceContent color={car.status === 'in stock' ? colors.success : colors.assent}>
        <strong>$</strong>
        <h3>{car.price_per_day}</h3>
        <span>/day</span>
        <h5>{car.status}</h5>
      </PriceContent>
    </Container>
  );
};

export default CarItem;
