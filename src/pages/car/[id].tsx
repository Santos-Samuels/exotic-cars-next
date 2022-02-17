import { InfoContainer, InfoContent } from "@styles/pages/Car";
import { AppContainer, Slide, Title } from "@components/index";
import data from "@shared/services/cars.json";
import { titleSize } from "@components/UI/Title/styles";
import { colors } from "@shared/GlobalStyles/colors";
import {  GetServerSideProps, NextPage } from "next";
import { ICar } from "@shared/interfaces";
import { ParsedUrlQuery } from "querystring";

const Car: NextPage<{car: ICar}> = ({ car }) => {
  return (
    <AppContainer styledBackgroung>
      <InfoContainer>
        <img src={car?.brand_logo} alt={`${car?.beand} logo`} />
        <InfoContent
          color={car?.status === "in stock" ? colors.success : colors.assent}
        >
          <Title bold size={titleSize.lg}>
            {car?.beand + " " + car?.model}
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

interface Params extends ParsedUrlQuery {
  id: string,
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params as Params
  const car = data.cars.find((car) => car.id.toString() === params.id);
 
  if (!car) {
    return {
      notFound: true,
    };
  }

  return { props: { car } };
};

export default Car;
