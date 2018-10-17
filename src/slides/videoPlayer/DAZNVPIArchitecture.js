import React from 'react';
import {
    Image,
    Heading,
    Slide,
  } from 'spectacle';


export default class DaznVpiArchitecture extends React.Component {
    render() {
      return (
            <Slide>
                <Heading lineHeight={1}>The DAZN Video Player Interface</Heading>
                <Image src={'./assets/dazn-vpi-architectural-diagram.png'}  fit/>
            </Slide>
        )
    }
}
