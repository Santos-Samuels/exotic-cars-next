import { useEffect, useState } from "react";
import Button from "../Button";
import SlideCarItem from "../SlideCarItem";
import Title from "../Title";
import { titleSize } from "../Title/styles";
import {
  BackButton,
  ColorContainer,
  Container,
  StyledImage,
  StyledMain,
} from "./styles";
import data from "@shared/services/cars.json";
import { ICarImage } from "@shared/interfaces";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Slide: React.FC = () => {
  const router = useRouter();
  const car = data.cars.find((car) => car.id.toString() === router.query.id);
  const [selectedImage, setSelectedImage] = useState<ICarImage>(car!.images[0]);
  
  const slideHendler = (index: number) => {
    const updatedItem = car!.images[index]
    setSelectedImage(updatedItem)
  };


  return (
    <>
      <StyledMain>
        <BackButton>
          <Button clickHandler={() => router.back()}>
            <span className="material-icons" style={{ marginRight: "5px" }}>
              arrow_back
            </span>
            Back to catalog
          </Button>
        </BackButton>

        <StyledImage src={selectedImage.url} alt="" />

        <ColorContainer>
          <Title bold size={titleSize.xl}>
            {selectedImage.id.toString().padStart(2, "0")}
          </Title>
          <Title bold={false} size={titleSize.xs}>
            {selectedImage.color}
          </Title>
        </ColorContainer>
      </StyledMain>

      <Button fill centered width="150px" clickHandler={() => {}}>
        Buy now
        <span className="material-icons" style={{ marginLeft: "5px" }}>
          arrow_forward
        </span>
      </Button>

      <Container>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={3}
        className="mySwiper"
        loop={true}
        initialSlide={0}
        centeredSlides={true}
        onSlideChange={e => slideHendler(e.realIndex)}
      >
        {car!.images.map((image) => (
          <SwiperSlide>
            <SlideCarItem
              image={image.url}
              imageId={image.id}
              isSelected={image.id === selectedImage.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </Container>
    </>
  );
};

export default Slide;
