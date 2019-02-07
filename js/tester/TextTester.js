
import React, { Component } from 'react';


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
    ViroNode,
    ViroParticleEmitter,
    ViroAnimations,
    ViroImage,
    ViroQuad,
    ViroText,
    ViroButton,
    ViroFlexView
} from 'react-viro';
import { View } from 'react-native-animatable';


class TextTester extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Testing",
            colour: "#4286f4"
        }
    }
    changeColor = () => {
        let newState = { ...this.state };
        newState.text = "eedededededewwdwwwe";
        this.setState(newState);
    }
    render() {

        return (


            <ViroNode
            position={[-3, 0, -1]}
            >
                <ViroButton
                    source={require("../res/btn_feature_color_pink.png")}

                    tapSource={require("../res/btn_feature_color_pink_pressed.png")}
                    position={[-1, -0.5, 0]}
                    height={0.7}
                    width={0.9}
                    onClick={this.props.onClick}

                />
            </ViroNode>



        );

    }


}

export default TextTester;


