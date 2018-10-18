import React, {Component} from 'react';
import {BehaviorSubject, merge} from 'rxjs';
import { map, filter } from 'rxjs/operators';

import {
    Slide,
    CodePane,
    Layout,
    Heading,
} from 'spectacle';

import VolumeSlider from './VolumeSlider';
import layout from 'spectacle/lib/components/layout';

const SOMECODE =
`
    this.volume$ = new BehaviorSubject(30);
    this.mute$ = new BehaviorSubject(false);

    this.mute$.subscribe(mute => {
        this.setState({
            mute,
        });
    });


    merge(this.volume$, this.mute$).pipe(
        map(value => value === true ? 0 : value),
        filter(value => typeof value !== 'boolean'),
    ).subscribe(volume => {
        this.setState({
            volume,
        });
    });
`

export default class TheVolumeSliderRxjsSolution extends Component {

    constructor(props) {
        super(props);
        this.state = {
            volume: 0,
            mute: false,
        };
    } 

    componentDidMount() {
        this.volume$ = new BehaviorSubject(30);
        this.mute$ = new BehaviorSubject(false);

        this.mute$.subscribe(mute => {
            this.setState({ mute });
        });

        
        this.effectiveVolume$ = merge(this.volume$, this.mute$)
            .pipe(
                map(value => value === true ? 0 : value),
                filter(value => typeof value !== 'boolean'),
            )
            .subscribe(volume => {
                this.setState({ volume });
            });
    }


    render() {
        return (
            <Slide>
                <Heading lineHeight={1}>Managing Observables</Heading>
                <Layout>
                    <VolumeSlider volume={this.state.volume} mute={this.state.mute} fit/>
                    <CodePane
                        lang="javascript" 
                        textSize={20}
                        padding={55}
                        fit 
                        source={SOMECODE}
                    />
                </Layout>
            </Slide>
        )
    }
}