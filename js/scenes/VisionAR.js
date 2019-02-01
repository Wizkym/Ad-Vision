'use strict';

import React, { Component } from 'react';

import particle from '../helpers/particle';

import anims from '../helpers/animate';

import {StyleSheet} from 'react-native';

import {
    ViroARScene,
    ViroConstants,
    ViroARImageMarker,
    ViroBox,
    ViroARTrackingTargets,
    ViroMaterials,
    ViroVideo,
    ViroParticleEmitter,
    ViroAnimations
} from 'react-viro';

class VisionAR extends Component {

    constructor() {
        super();

        // Set initial state here
        this.state = {
            text : "Initializing AR..."
        };
    

        // Bind 'this' to functions
        this._onInitialized = this._onInitialized.bind(this);

        this._onBufferStart = this._onBufferStart.bind(this);
        this._onAnimationFinished = this._onAnimationFinished.bind(this);


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
        ViroARTrackingTargets.createTargets({
            "apple" : {
                source : require('../res/apple.jpg'),
                orientation : "Up",
                physicalWidth : 0.1 // real world width in meters
            },
            "power" : {
                source : require('../res/powerade.png'),
                orientation : "Up",
                physicalWidth : .05 // real world width in meters
            },
            "shop" : {
                source : require('../res/kohls.jpg'),
                orientation : "Up",
                physicalWidth : .2 // real world width in meters
            }
        });
    }

    render() {
        return (
            <ViroARScene onTrackingUpdated={this._onInitialized} >
            {anims.registerAll()}
                <ViroARImageMarker target={"apple"} ><ViroBox position={[0, .1, 0]} scale={[.1, .1, .1]} materials={["apple"]} />
                </ViroARImageMarker>
                <ViroARImageMarker target={"power"} ><ViroBox position={[0, .5, 0]} scale={[.2, .2, .2]} materials={["power"]} />
                </ViroARImageMarker>
                {/*<ViroARImageMarker target={"targetThree"} ><ViroBox position={[0, .5, 0]} scale={[.2, .2, .2]} materials={["shop"]} />*/}
                <ViroARImageMarker target={"shop"} >
            

                    <ViroBox position={[0, 0, 0]} opacity={0.0} scale={[0.1, 0.1, 0.1]} materials={["apple"]}  animation={{name: 'plswrk', run: true, loop :true }} />
                    {particle.Firework([0,0,0], 4200, "fxparttinyglowy.png", true)}
                   
                </ViroARImageMarker>
            </ViroARScene>
        );
    }

    _onInitialized(state, reason) {
        if (state === ViroConstants.TRACKING_NORMAL) {
            this.setState({
                text : "Hello World!"
            });
        } else if (state === ViroConstants.TRACKING_NONE) {
            // Handle loss of tracking
        }
    }
    _onBufferStart(func){
        func;
    }
    _onAnimationFinished(){
        console.log('animation done');
    }
  

}

module.exports = VisionAR;
