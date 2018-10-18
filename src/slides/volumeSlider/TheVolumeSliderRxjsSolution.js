import React, {Component} from 'react';

import {
    Slide
} from 'spectacle';

import VolumeSlider from './VolumeSlider';

export default class TheVolumeSliderRxjsSolution extends Component {
    render() {
        return (
            <Slide>
                <VolumeSlider volume={100} isMuted={true}/>
            </Slide>
        )
    }
}