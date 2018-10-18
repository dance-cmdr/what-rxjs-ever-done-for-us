import React, {Component} from 'react';
import {
    Heading,
    Slide,
    Image,
    Layout,
} from 'spectacle';

  export default class AboutRxjs extends Component {
      render() {
        return (
            <Slide>
                <Heading fit lineHeight={1}>RxJS</Heading>
                <Image height={500}  src={'./assets/ratatouiCombining.gif'} />
            </Slide>
          )
      } 
  } ;
