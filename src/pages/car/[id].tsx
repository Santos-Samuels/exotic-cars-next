import {
  InfoContainer, InfoContent,
} from "@styles/pages/Car";
import { AppContainer, Slide, Button, Title } from "@components/index";
import data from "@shared/services/cars.json";
import { titleSize } from "@components/UI/Title/styles";
import { colors } from "@shared/GlobalStyles/colors";
import { useRouter } from "next/router";

const Car: React.FC = () => {
  const router = useRouter();
  const car = data.cars.find((car) => car.id.toString() === router.query.id);

  return (
    <AppContainer styledBackgroung>
      <InfoContainer>
        <img src={car?.brand_logo} alt={`${car?.beand} logo`} />
        <InfoContent color={car?.status === 'in stock' ? colors.success : colors.assent}>
          <Title bold size={titleSize.lg}>
            {car?.beand + ' ' + car?.model}
          </Title>
          <Title bold={false} size={titleSize.md}>
            ${car?.price_per_day}/day
          </Title>
          <h5>{car?.status}</h5>
        </InfoContent>
      </InfoContainer>

      <Slide />
    </AppContainer>
  );
};

export default Car;
