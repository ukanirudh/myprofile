import { Dot } from "pure-react-carousel";
import React from "react";
import { Button, Container } from "semantic-ui-react";

const CustomDotGroup = ({ slides, size = "mini" }) => {
  console.log(slides)
  return (
    <Container textAlign="center">
      <Button.Group size={size}>
        {[...Array(slides).keys()].map(slide => (
          <Button as={Dot} key={slide} icon="circle" slide={slide} />
        ))}
      </Button.Group>
    </Container>);
}


export default CustomDotGroup;
