import React from 'react';
import {
    Image,
    Heading,
    Slide,
    List,
    ListItem,
    Text,
  } from 'spectacle';
import styled from 'react-emotion';

const CustomList = styled(List)`
    list-style-position: outside;
`;

const CustomListItem = styled(ListItem)`
  margin-top: 1em;
`;

const When = styled(Text)`
  color: #efff1c;
  text-align: left;
`;

const Then = styled(Text)`
  color: #ffffff;
  text-align: left;
`;
 

export default class TheVolumeSliderProblem extends React.Component {
    render() {
      return (
            <Slide>
                <Heading lineHeight={1}>Updating Volume State with RxJS</Heading>
                <Image src={'./assets/volume-slider.gif'} height={500} fit/>
                <Heading size={2}>Requirements</Heading>
                <CustomList>
                    <CustomListItem> Volume Bar </CustomListItem>
                    <CustomListItem> Mute Button </CustomListItem>
                </CustomList>
                <div>
                       <When>WHEN we set volume X</When>
                       <Then>THEN it should show volume X</Then> 
                </div>
                <div>
                       <When>WHEN Muted</When>
                       <Then>THEN it should show volume 0</Then> 
                </div>
                <div>
                       <When>WHEN Unmuted</When>
                       <Then>THEN it should recover volume X</Then> 
                </div>
                
            </Slide>
        )
    }
}
