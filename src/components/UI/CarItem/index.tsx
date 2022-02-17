import { Container, PriceContent } from "./styles";
import { ICar } from "@shared/interfaces";
import { colors } from "@shared/GlobalStyles/colors";
import { useRouter } from "next/router";

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

      <img src={car.image} alt={car.beand} />

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
