import React, {Component} from 'react';
import {
    Heading,
    List,
    ListItem,
    Slide,
} from 'spectacle';

  export default class StreamsInDAZN extends Component {
      render() {
        return (
            <Slide>
                <Heading lineHeight={1}>And were do you find streams in DAZN?</Heading>
                <List>
                    <ListItem>Video Player Values</ListItem>
                    <ListItem>Video Player Events</ListItem>
                    <ListItem>Mouse Events</ListItem>
                    <ListItem>Data Updates</ListItem>
                    <ListItem>UI State Events</ListItem>
                </List>
            </Slide>
          )
      } 
  } ;
