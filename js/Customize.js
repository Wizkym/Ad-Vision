import React, { Component } from 'react';
import {
    ActivityIndicator,
    AppRegistry,
    Image,
    ScrollView,
    Text,
    View,
    StyleSheet,
    PixelRatio,
    TouchableHighlight,
} from 'react-native';

import RenderIf from './helpers/renderIf';
import { ViroARSceneNavigator } from 'react-viro';
const ARScene = require('../js/HelloWorldSceneAR');

class Customize extends Component {
    constructor() {
        super();
        this.state = {
           isClicked: false
        };
        this._switchToAR = this._switchToAR.bind(this)
    }

    render () {
        {RenderIf(this.state.isClicked,
            <View style={{flex: 1}}>
                <ViroARSceneNavigator {...this.state.sharedProps}
                                      initialScene={{scene: ARScene}}/>
                <View style={{position: 'absolute', backgroundColor:"#ffffff22", left: 30, right: 30, top: 30, alignItems: 'center'}}>
                    <Text style={{fontSize:12, color:"#ffffff"}}>Tracking initialized.</Text>
                </View>
            </View>,
            <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={{fontSize: 20}}>I am second component</Text>
                <TouchableHighlight style={styles.buttons}
                                    onPress={this._switchToAR}
                                    underlayColor={'#68a0ff'} >

                </TouchableHighlight>
            </View>)
        }

    }

    _switchToAR () {
        this.setState({
            isClicked: true
        })
    }
}

const styles = StyleSheet.create({
    buttons : {
        height: 65,
        width: 100,
        paddingTop:20,
        paddingBottom:20,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor:'#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    }
});

module.exports = Customize;