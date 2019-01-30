'use strict';

import React, { Component } from 'react';

import { Fountain } from '../helpers/particle';

import {StyleSheet} from 'react-native';

import {
    ViroARScene,
    ViroConstants,
    ViroARImageMarker,
    ViroBox,
    ViroARTrackingTargets,
    ViroMaterials,
    ViroVideo,
    ViroParticleEmitter
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
                <ViroARImageMarker target={"apple"} ><ViroBox position={[0, .1, 0]} scale={[.1, .1, .1]} materials={["apple"]} />
                </ViroARImageMarker>
                <ViroARImageMarker target={"power"} ><ViroBox position={[0, .5, 0]} scale={[.2, .2, .2]} materials={["power"]} />
                </ViroARImageMarker>
                {/*<ViroARImageMarker target={"targetThree"} ><ViroBox position={[0, .5, 0]} scale={[.2, .2, .2]} materials={["shop"]} />*/}
                <ViroARImageMarker target={"shop"} >
                    {Fountain([0,0,0], 3000, 'fxparttinyglowy.png')}
                    <ViroVideo
                        source={require('../res/lights.mp4')}
                        height={.2}
                        width={.2}
                        loop={true}
                        position={[0,0,0]}
                        materials={["shop"]}
                       transformBehaviors={["billboardX"]}

                    />
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

}

module.exports = VisionAR;
