import React from 'react';
import {
    Image,
    Text,
    Slide,
    Heading,
  } from 'spectacle';

  export default class RxJSShinesDeriving extends React.Component {
      render() {
        return (
          <Slide>
              <Heading lineHeight={0.65} fit>RxJS</Heading>
              <Heading fit textColor={'#ffffff'} size={3}>is awesome</Heading>
              <Heading fit >when is used to derive states and new values,</Heading>
              <Heading fit >from values that change often.</Heading>
          </Slide>
        );
      }
  }