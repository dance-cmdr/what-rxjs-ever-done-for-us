import React, {Component} from 'react';
import {
    BlockQuote,
    Heading,
    Quote,
    Cite,
    Link,
    Slide,
  } from 'spectacle';

  export default class Observables extends Component {
    render() {
        return (
            <Slide>
                <BlockQuote>
                <Heading lineHeight={2}>Observable</Heading>
                <Quote textColor="secondary">
                In physics, an observable is a physical quantity that can be measured. 
                Examples include position and momentum. In systems governed by classical mechanics, 
                it is a real-valued function on the set of all possible system states.
                </Quote>
                <Cite>Wikipedia</Cite>
                <Link href={'https://en.wikipedia.org/wiki/Observable'}> https://en.wikipedia.org/wiki/Observable </Link>
                </BlockQuote>
            </Slide>
        );
    }
}
