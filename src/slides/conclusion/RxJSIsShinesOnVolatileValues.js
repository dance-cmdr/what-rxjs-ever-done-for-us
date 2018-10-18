import React from 'react';
import {
    Image,
    Text,
    Slide,
    Heading,
  } from 'spectacle';

  export default class RxJSShinesVolatile extends React.Component {
      render() {
        return (
          <Slide>
              <Heading lineHeight={0.65} fit>RxJS</Heading>
              <Heading fit textColor={'#ffffff'} size={3}>is good</Heading>
              <Heading fit >for dealing with values that change often.</Heading>
          </Slide>
        );
      }
  }