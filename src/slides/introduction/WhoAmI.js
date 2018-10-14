import React from 'react';
import {
    CodePane,
    Image,
    Layout,
    Text,
    Heading,
  } from 'spectacle';

  const ALEX =
`
  const Alex = {
      productivity: coffee => code,
      happiness: dogs => happiness,
      storytelling: dnd => stories,
  };
`

  export default class Cover extends React.Component {
    render() {
      return (
            <React.Fragment>
                <Heading lineHeight={2} size={2} fill> Software Engineer @ </Heading>
                <Layout>
                    <Image src={'./assets/dazn.png'} height={300} fit/>
                    <Image src={'./assets/tweeterProfile.png'} height={300} fit/>
                    <Image src={'./assets/githubProfile.png'} height={300} fit />
                </Layout>
                <Layout>
                    <CodePane
                    lang="javascript" 
                    textSize={20}
                    padding={55}
                    source={ALEX}
                    />
                </Layout>     
            </React.Fragment>
        )
    }
}
