import React from 'react';
import {
    Image,
    Text,
    Slide,
  } from 'spectacle';

  export default class AboutDAZN extends React.Component {
      render() {
        return (
          <Slide>
              <Image src={'./assets/dazn.png'} height={200} fit/>
              <Text textColor="secondary"> An OTT Sports Streaming Company.</Text>
          </Slide>
        );
      }
  }