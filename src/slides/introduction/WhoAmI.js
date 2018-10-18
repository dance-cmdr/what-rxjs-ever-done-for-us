import React from 'react';
import {
    CodePane,
    Image,
    Layout,
    Heading,
    Slide,
  } from 'spectacle';

  const ALEX =
`
  const Alex = {
      work: coffee => code,
      live: dogs => happiness,
      play: dnd => randomRidiculousStories,
  };
  
`

  export default class Cover extends React.Component {
    render() {
      return (
            <Slide>
                <Heading lineHeight={2} size={2} fill> Software Engineer @ </Heading>
                <Layout>
                    <Image src={'./assets/dazn.png'} height={300} fit/>
                    <Image src={'./assets/tweeterProfile.png'} height={300} fit/>
                    <Image src={'./assets/githubProfile.png'} height={300} fit />
                </Layout>
                <div>
                    <CodePane
                    lang="javascript" 
                    textSize={20}
                    padding={55}
                    fill
                    source={ALEX}
                    />
                </div>
            </Slide>
        )
    }
}
