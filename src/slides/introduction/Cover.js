import React from 'react';
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
  } from 'spectacle';

  export default class Cover extends React.Component {
    render() {
      return (
            <React.Fragment>
                <Heading size={1} lineHeight={1} textColor="secondary">
                What
                </Heading>
                <Heading size={1} fit lineHeight={1} textColor="secondary">
                <big size={6}>RxJS</big>
                </Heading>
                <Heading size={1} fit textColor="secondary">
                ever done for us?
                </Heading>
                <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                Apart from helping DAZN writing a Video Player Interface, 
                simplifying Volume State Management 
                and reporting the Video Player State to the consumer ...
                </Text>
            </React.Fragment>
        )
    }
}
