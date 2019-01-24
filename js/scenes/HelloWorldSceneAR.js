'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
    ViroARScene,
    ViroText,
    ViroConstants,
    ViroARImageMarker,
    ViroBox,
    ViroARTrackingTargets,
    Viro360Image,
    ViroMaterials,
    ViroVideo
} from 'react-viro';

class HelloWorldSceneAR extends Component {

    constructor() {
        super();

        // Set initial state here
        this.state = {
            text : "Initializing AR..."
        };

        // bind 'this' to functions
        this._onInitialized = this._onInitialized.bind(this);

        ViroMaterials.createMaterials({
            apple: {
                diffuseTexture: require('../../assets/images/apple.jpg'),
            },
            power: {
                diffuseTexture: require('../../assets/images/powerade.png'),
            },
            shop: {
                diffuseTexture: require('../../assets/images/kohls.jpg'),
            }
        });

        ViroARTrackingTargets.createTargets({
            "apple" : {
                source : require('../../assets/images/apple.jpg'),
                orientation : "Up",
                physicalWidth : 0.1 // real world width in meters
            },
            "power" : {
                source : require('../../assets/images/powerade.png'),
                orientation : "Up",
                physicalWidth : .05 // real world width in meters
            },
            "shop" : {
                source : require('../../assets/images/kohls.jpg'),
                orientation : "Up",
                physicalWidth : .2 // real world width in meters
            }
        });
    }

    render() {
        return (
            <ViroARScene onTrackingUpdated={this._onInitialized} >
                <ViroARImageMarker target={"apple"} ><ViroBox position={[0, .2, 0]} scale={[.2, .2, .2]} materials={["apple"]} />
                </ViroARImageMarker>
                <ViroARImageMarker target={"power"} ><ViroBox position={[0, .5, 0]} scale={[.2, .2, .2]} materials={["power"]} />
                </ViroARImageMarker>
                {/*<ViroARImageMarker target={"targetThree"} ><ViroBox position={[0, .5, 0]} scale={[.2, .2, .2]} materials={["shop"]} />*/}
                <ViroARImageMarker target={"shop"} >
                    <ViroVideo
                        source={require('../../assets/images/lights.mp4')}
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

var styles = StyleSheet.create({
    helloWorldTextStyle: {
        fontFamily: 'Arial',
        fontSize: 30,
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
});

module.exports = HelloWorldSceneAR;
