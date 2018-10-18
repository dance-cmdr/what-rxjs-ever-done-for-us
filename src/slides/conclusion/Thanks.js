import React from 'react';
import {
    CodePane,
    Image,
    Layout,
    Heading,
    Slide,
    Link,
    List,
    ListItem,
    Text,
  } from 'spectacle';

  import styled from 'react-emotion';

  const UnbulletedList = styled(List)(`
        list-style: none;
        width: 100%;
        text-align: center;
  `)

  const StyledLogo = styled(Image)(`
        padding: 20px;
  `)

  export default class Thanks extends React.Component {
    render() {
      return (
            <Slide>
                <Heading> Thanks !!!</Heading>
                <Layout>
                    <Link fit textColor={'#ffffff'} href={'https://twitter.com/dance_cmdr'}>
                        <Image src={'./assets/tweeterProfile.png'} height={300}/>
                        Follow me on Tweet @dance_cmdr
                    </Link>
                    
                    <Link fill href={'https://engineering.dazn.com'}> 
                            <StyledLogo src={'./assets/dazn.png'} height={300} />
                            <Text textSize={"1em"} textColor={'#ffffff'} >
                                Visit engineering.dazn.com
                            </Text>
                            <Text textSize={"1em"} textColor={'#ffffff'} >
                                for news from DAZN Engineering Team.
                            </Text>
                    </Link>

                    <Link textColor={'#ff8888'} href={'https://www.instagram.com/buffy.the.bull.terrier/'}>
                        <StyledLogo src={'./assets/buffy.gif'} height={300}/>
                        ... Or Follow buffy.the.bull.terrier on instagram
                    </Link>
                </Layout>
            </Slide>
        )
    }
}
