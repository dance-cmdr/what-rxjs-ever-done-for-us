import React from 'react';
import {
    Image,
    Heading,
    Slide,
    List,
    ListItem,
  } from 'spectacle';
import styled from 'react-emotion';

const CustomList = styled(List)`
    list-style-position: outside;
`;

const CustomListItem = styled(ListItem)`
  margin-top: 1em;
`;
 

export default class DaznVpiDesignGoals extends React.Component {
    render() {
      return (
            <Slide>
                <Heading lineHeight={1}>The Video Player Problem!</Heading>
                <Image src={'./assets/dazn.png'} height={300} fit/>
                <CustomList>
                    <CustomListItem>
                        A central and highly generic player "state", common to all targets,
                        and made up of simple, domain-specific "stores".
                    </CustomListItem>
                    <CustomListItem>
                        Pluggable, interchangeable "solutions", abstracting away the various 
                        technologies required to play ABR and/or DRM content on a particular target.
                    </CustomListItem>
                    <CustomListItem>
                        Pluggable, interchangeable UIs, representing the complete UI layer
                        for any particular target (e.g. browser, tv, console).
                    </CustomListItem>
                    <CustomListItem>
                        Highly decoupled domains, reacting with each other.
                    </CustomListItem>
                </CustomList>
            </Slide>
        )
    }
}
