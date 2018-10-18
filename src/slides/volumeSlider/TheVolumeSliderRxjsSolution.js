import React, {Component} from 'react';
import {BehaviorSubject, merge} from 'rxjs';
import { map, filter } from 'rxjs/operators';

import {
    Slide
} from 'spectacle';

import VolumeSlider from './VolumeSlider';

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
            this.setState({
                mute,
            });
        });

        
        merge(this.volume$, this.mute$).pipe(
            map(value => value === false ? 0 : value),
            filter(value => typeof value !== 'boolean'),
        ).subscribe(volume => {
            this.setState({
                volume,
            });
        });
    }


    render() {
        return (
            <Slide>
                <VolumeSlider volume={this.state.volume} mute={this.state.mute}/>
            </Slide>
        )
    }
}