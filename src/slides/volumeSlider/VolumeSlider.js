import React, {Component} from 'react';
import styled from 'react-emotion';
import { Observable } from 'rxjs';

import IconMute from './IconMute';
import IconVolume from './IconVolume';

const VolumeControl = styled('div')(`
    width: 30px;
    margin: auto;
    position: relative;
`);

const VolumeSlider = styled('div')(`
    width: 30px;
    opacity: 1;
    transition: opacity 300ms;
    pointer-events: none;
`);

const VolumeLabel = styled('div')(`
    color: white;
    font-family: Helvetica, sans-serif;
    padding: 0.5rem 0;
    font-size: 10px;
    text-align: center;
    user-select: none;
`);

const VolumeTrack = styled('div')(`
    position: relative;
    width: 4px;
    background: rgba(255, 255, 255, 0.5);
    margin-left: calc(50% - 2px);
    height: 100px;

    &::after {
        content: '';
        position: absolute;
        cursor: pointer;
        width: 30px;
        left: 0;
        bottom: 0;
        top: 0;
    }
`);

const VolumeLevel = styled('div')(`
    position: absolute;
    width: 1.5rem;
    height: 4px;
    background: white;
    left: calc(50% - 0.75rem);
    bottom: 0;
    margin-bottom: -2px;
    transition: transform 100ms;
    transform: scale(0.9);
    z-index: 1;

    &::after {
        content: '';
        position: absolute;
        cursor: pointer;
        width: 2rem;
        height: 2rem;
        left: calc(50% - 1rem);
        top: calc(50% - 1rem);
    }

    &:hover {
        transform: scale(1);
    }
`);

const VolumeMuteToggleButton = styled('button')(`
    width: 20px;
    height: 20px;
    z-index: 1;
    position: relative;
    color: black;
    background-color: white;
    left: 0; 
    padding: 0px;
    margin-top: 10px;
    
    &  svg {
        color: black;
        position: absolute;
        top: 0;
        left: 5%;
        margin: 0;
        padding:0;
    }
`);

export default class Presentation extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handleClick() {
        console.log('click');
    }

    setTrackRef = element => this.trackRef = element;


    render () {

        const volume = this.props.volume;
        const mute = this.props.mute;

        const UpdatableVolumeLevel = styled(VolumeLevel)(`
            bottom: ${volume}%;
        `);

        return (
            <VolumeControl>
                <VolumeSlider>
                    <VolumeLabel>{volume}%</VolumeLabel>
                    <VolumeTrack ref={this.setTrackRef}>
                        <UpdatableVolumeLevel />
                    </VolumeTrack>
                </VolumeSlider>
    
                <VolumeMuteToggleButton onClick={this.handleClick}>
                    {mute ? <IconMute/> : <IconVolume/>}
                </VolumeMuteToggleButton>
            </VolumeControl>
        );
    }
   
}