import React, {Component} from 'react';
import {
    BlockQuote,
    Heading,
    Quote,
    Cite,
    Link,
    Slide,
  } from 'spectacle';

  export default class Streams extends Component {
    render() {
        return (
            <Slide>
                <BlockQuote>
                <Heading lineHeight={2}>Streams</Heading>
                <Quote textColor="secondary">
                    In computer science, a stream is a sequence of data elements made available over time. A stream can be thought of as items on a conveyor belt being processed one at a time rather than in large batches.
                </Quote>
                <Cite>Wikipedia</Cite>
                <Link href={'https://en.wikipedia.org/wiki/Stream_(computing)'}> https://en.wikipedia.org/wiki/Stream_(computing) </Link>
                </BlockQuote>
            </Slide>
        );
    }
}
