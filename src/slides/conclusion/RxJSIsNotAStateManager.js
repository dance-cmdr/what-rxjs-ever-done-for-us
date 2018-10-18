import React from 'react';
import {
    Image,
    Text,
    Slide,
    Heading,
  } from 'spectacle';

  export default class RxJSIsNotAStateManager extends React.Component {
      render() {
        return (
          <Slide>
              <Heading fit>RxJS is</Heading>
              <Heading textColor={'#ff0000'} fit>NOT</Heading>
              <Heading fit>a state manager!</Heading>
              <Text>But you can make one with it.</Text>
          </Slide>
        );
      }
  }