import React from 'react';
import {
    Image,
    Heading,
    Text,
    Slide,
  } from 'spectacle';

  export default class InDAZN extends React.Component {
    render() {
      return (
            <Slide>
                <Heading lineHeight={1}>in DAZN?</Heading>
                <Image src={'./assets/dazn.png'} height={300} fit/>
                <Text> Add a snapshot of the app</Text>
            </Slide>
        )
    }
}
