// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Layout,
  ListItem,
  List,
  Link,
  Quote,
  Slide,
  Text,
  Image,
  Appear,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import Cover from './slides/introduction/Cover';
import WhoAmI from './slides/introduction/WhoAmI';
import layout from 'spectacle/lib/components/layout';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#3a3a3a',
    secondary: '#ffffff',
    tertiary: '#efff1c',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={400}
        theme={theme}
        contentHeight={1500}
        contentWidth={1500}
      >
        <Slide transition={['zoom']} id={'cover'} maxHeight={false} fit bgColor="primary">
          <Cover />
        </Slide>
        <Slide transition={['zoom']} >
          <WhoAmI />
        </Slide>
        <Slide transition={['fade']} >
            <Image src={'./assets/dazn.png'} height={200} fit/>
            <Text textColor="secondary"> An OTT Sports Streaming Company.</Text>
        </Slide>
        <Slide transition={['fade']}>
          <BlockQuote>
            <Heading lineHeight={2}>Streams</Heading>
            <Quote textColor="secondary">
                In computer science, a stream is a sequence of data elements made available over time. A stream can be thought of as items on a conveyor belt being processed one at a time rather than in large batches.
            </Quote>
            <Cite>Wikipedia</Cite>
            <Link href={'https://en.wikipedia.org/wiki/Stream_(computing)'}> https://en.wikipedia.org/wiki/Stream_(computing) </Link>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
