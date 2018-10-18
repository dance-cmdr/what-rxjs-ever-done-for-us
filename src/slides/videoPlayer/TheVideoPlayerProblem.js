import React from 'react';
import {
    Image,
    Heading,
    Slide,
    List,
    ListItem,
  } from 'spectacle';

  export default class TheVideoPlayerProblem extends React.Component {
    render() {
      return (
            <Slide>
                <Heading lineHeight={1}>The Video Player Problem!</Heading>
                <Image src={'./assets/dazn-player.png'} />
                {/* <List>
                    <ListItem>Video Player Values</ListItem>
                    <ListItem>Video Player Events</ListItem>
                    <ListItem>Mouse Events</ListItem>
                    <ListItem>Data Updates</ListItem>
                    <ListItem>UI State Events</ListItem>
                    <ListItem>Media APIs are not consistent between devices</ListItem>
                </List> */}
            </Slide>
        )
    }
}
