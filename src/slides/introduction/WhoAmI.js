import React from 'react';
import {
    CodePane,
    Image,
    Layout,
    Text,
  } from 'spectacle';

  export default class Cover extends React.Component {
    render() {
      return (
            <React.Fragment>
                <Layout>
                    <Image src={'./assets/tweeterProfile.png'} height={300} fit/>
                    <Image src={'./assets/githubProfile.png'} height={300} fit />
                </Layout>
                <Layout>
                    <CodePane
                    lang="javascript" 
                    textSize={20}
                    padding={35}
                    source={`
    const Alex = {
        productivity: coffee => code,
        happiness: dogs => happiness,
        storytelling: dnd => stories,
    };
                    `}
                    />
                </Layout>     
            </React.Fragment>
        )
    }
}
