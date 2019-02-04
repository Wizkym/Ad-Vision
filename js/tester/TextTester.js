
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
    constructor(props){
        super(props);
        this.state = {
            text: "Testing",
            colour:"#4286f4"
        }
    }
    changeColor = () => {
        let newState = {...this.state};
        newState.text = "eedededededewwdwwwe";
        this.setState(newState);
    }
    render() {

        return(
            <ViroFlexView style={{ flexDirection: 'row', padding: .1 }}
            width={1} height={1}
            position={[-2, 0, 0]}
            rotation={[0, 45, 0]} >
    
    
            <ViroText
                text={this.props.thing}
                textAlign="left"
                textAlignVertical="top"
                textLineBreakMode="Justify"
                textClipMode="ClipToBounds"
                color={this.state.colour}
                width={2} height={2}
                style={{ fontFamily: "Arial", fontSize: 20, fontWeight: "400", fontStyle: "italic", color: "#0000FF" }}
                position={[0, 0, -5]}
                onClick={this.changeColor}

            />
    
            <ViroButton
                source={require("../res/btn_feature_color_pink.png")}
    
                tapSource={require("../res/btn_feature_color_pink_pressed.png")}
                position={[0, 0, 0]}
                height={0.7}
                width={0.9}
                onClick={this.props.onClick}
    
            />
    
        </ViroFlexView>

        );

    }


}

export default TextTester;


