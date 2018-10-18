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
import Observables from './slides/streams/Observables';
import AboutStreamsAndObservables from './slides/streams/AboutStremsAndObsevables';
import InDAZN from './slides/streams/InDAZN';

import TheVideoPlayerProblem from './slides/videoPlayer/TheVideoPlayerProblem';
import DaznVpiDesignGoals from './slides/videoPlayer/DAZNVPIDesignGoals';
import DaznVpiArchitecture from './slides/videoPlayer/DAZNVPIArchitecture';
import GlobX from './slides/videoPlayer/GlobX';

import TheVolumeSliderProblem from './slides/volumeSlider/TheVolumeSliderProblem';
import TheVolumeSliderRxjsSolution from './slides/volumeSlider/TheVolumeSliderRxjsSolution';
import RxJSIsNotAStateManager from './slides/conclusion/RxJSIsNotAStateManager';
import RxJSShinesVolatile from './slides/conclusion/RxJSIsShinesOnVolatileValues';
import RxJSShinesDeriving from './slides/conclusion/RXJSIsAwesomeOnDerivingStates';
import AboutRxjs from './slides/streams/AboutRxJS';

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
          <InDAZN />
          <AboutStreamsAndObservables />
          <Streams />
          <Observables />
          <AboutRxjs />
          {/* <StreamsInDazn /> */}
        </SlideSet>
        <SlideSet>
          <TheVideoPlayerProblem />
          <DaznVpiDesignGoals />
          <DaznVpiArchitecture />
          <GlobX />
        </SlideSet>
        <SlideSet>
          <TheVolumeSliderProblem />
          <TheVolumeSliderRxjsSolution />
        </SlideSet>
        <SlideSet>
          <RxJSIsNotAStateManager />
          <RxJSShinesVolatile />
          <RxJSShinesDeriving />  
        </SlideSet>
      </Deck>
    );
  }
}
