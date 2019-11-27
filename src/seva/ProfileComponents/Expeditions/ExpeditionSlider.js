import { CarouselProvider, Slider } from "pure-react-carousel";
import React from "react";

import CustomCardSlide from "./CustomCardSlide";
import CustomDotGroup from "./CustomDotGroup";


const ExpeditionSlider = () => (
  <CarouselProvider
    naturalSlideWidth={6}
    naturalSlideHeight={1}
    totalSlides={3}

    interval={2000}
    isPlaying={true}
  >
    <Slider>
      <CustomCardSlide
        image="https://place-hold.it/640x320&text=Steve&fontsize=32"
        index={0}
        header="Matthew House"
        meta="Friend"
      />
      <CustomCardSlide
        header="Elliot Baker"
        image="https://place-hold.it/640x320&text=Elliot&fontsize=32"
        index={1}
        meta="Friend"
      />
      <CustomCardSlide
        header="Steve Sanders"
        image="https://place-hold.it/640x320&text=Steve&fontsize=32"
        index={2}
        meta="Friend"
      />
    </Slider>

    <CustomDotGroup slides={3} />
  </CarouselProvider>
);

export default ExpeditionSlider;
