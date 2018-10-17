// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  SlideSet,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import Cover from './slides/introduction/Cover';
import WhoAmI from './slides/introduction/WhoAmI';
import AboutDAZN from './slides/introduction/AboutDAZN';

import Streams from './slides/streams/Streams';
import StreamsInDazn from './slides/streams/StreamsInDAZN';

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
        <SlideSet>
          <Cover />
          <WhoAmI />
          <AboutDAZN />
        </SlideSet>
        <SlideSet>
          <Streams />
          <StreamsInDazn />
        </SlideSet>
      </Deck>
    );
  }
}
