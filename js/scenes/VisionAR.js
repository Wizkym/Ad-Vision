'use strict';

import React, { Component } from 'react';

import particle from '../helpers/particle';

import anims from '../helpers/animate';
import Tester from '../helpers/tester';
import TextTester from '../tester/TextTester';


import {
    Image,
    ScrollView,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

import {
    ViroARScene,
    ViroConstants,
    ViroARImageMarker,
    ViroBox,
    ViroARTrackingTargets,
    ViroMaterials,
    ViroVideo,
    ViroParticleEmitter,
    ViroAnimations,
    ViroImage,
    ViroQuad,
    ViroText,
    ViroButton,
    ViroFlexView
} from 'react-viro';
import { View } from 'react-native-animatable';
import { runTestEmitter, renderables } from '../helpers/tester';

class VisionAR extends Component {

    constructor(props) {
        super(props);

        // Set initial state here
        this.state = {
            text: "Initializing AR...",
            testText: "Click the pink circle after initializing tracking",
            playAnim: false,
            canRenderARComponents : false,
            targets: []
        };


        // Bind 'this' to functions
        this._onInitialized = this._onInitialized.bind(this);

        this._onBufferStart = this._onBufferStart.bind(this);
        this._onStart = this._onStart.bind(this);
        this.changeTitle = this.changeTitle.bind(this);






        // Set media to display after image recognition
        ViroMaterials.createMaterials({
            apple: {
                diffuseTexture: require('../res/apple.jpg'),
            },
            power: {
                diffuseTexture: require('../res/powerade.png'),
            },
            shop: {
                diffuseTexture: require('../res/kohls.jpg'),
            }
        });

        // Set materials for image tracking
        //needs to be remove, see Landing.js

    }

    _onInitialized(state, reason) {
        if (state === ViroConstants.TRACKING_NORMAL) {
            this.setState({
                text: "Hello World!"
            });
        } else if (state === ViroConstants.TRACKING_NONE) {
            // Handle loss of tracking
        }
    }
    _onBufferStart(func) {
        func;
    }
    _onStart() {
        particle.Firework([0, 0, 0], 4200, "fxparttinyglowy.png", false, 1800);
    }
    changeTitle = () => {
        let newState = {...this.state};
        newState.testText = "Yare Yare Daze";
        this.setState(newState);
    }
    bake = () => {
        let newState = {...this.state};
        
        if(renderables.hasBeenFilled){
            for(let i = 0; i < renderables.data.length; i++){
                newState.targets.push(renderables.data[i]);
            }
        }
        
        this.setState(newState);
    }
    checkIfRenderablesEmpty = () => {
        setInterval(() => {
            if(!renderables.hasBeenFilled && this.state.targets.length > 1){
                //alert('Scene will now refresh')
                let newState = {...this.state};
                newState.targets = [];
                this.setState(newState);
            }else{
                return;
            }
        }, 1000);
    }
    grabRenderables = () => {

        if(this.state.targets.length > 1){
            let ARtargets = this.state.targets.map( target => target );
            return ARtargets;
        }

    }
    render() {
    
          
        
        return (
            <ViroARScene onTrackingUpdated={this._onInitialized} >
                {this.checkIfRenderablesEmpty()}
                {anims.registerAll()}
                <TextTester 
                thing={this.state.testText}
                onClick={this.bake}
                />
                {this.grabRenderables()}
            
            </ViroARScene>
        );
    }



}


module.exports = VisionAR;
