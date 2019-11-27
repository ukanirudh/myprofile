import { Slide } from "pure-react-carousel";
import React from "react";
import { Card } from "semantic-ui-react";

const CustomCardSlide = ({ index, ...cardProps }) => (
  <Slide index={index}>
    <div style={{ padding: 10 }}>
      <Card fluid {...cardProps} />
    </div>
  </Slide>
);

export default CustomCardSlide;
