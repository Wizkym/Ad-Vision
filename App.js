/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

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

import { ViroARSceneNavigator } from 'react-viro';
import * as Animatable from 'react-native-animatable';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

/*
 TODO: Insert your API key below
 */
const sharedProps = {
    apiKey:"2491314B-56CD-4153-9187-17C7A7CDB6FD",
};

// Sets the default scene you want for AR and VR
const ARScene = require('./js/HelloWorldSceneAR');
const UNSET = "UNSET";
const AR_NAVIGATOR_TYPE = "AR";

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
let defaultNavigatorType = UNSET;

class App extends Component {
    render() {
        return <AppContainer />
    }
}

export default App;

class ViroSample extends Component {
    constructor() {
        super();
        this.state = {
            navigator : defaultNavigatorType,
            sharedProps : sharedProps,
        };

        this._getExperienceSelector = this._getExperienceSelector.bind(this);
        this._getARNavigator = this._getARNavigator.bind(this);
        this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(this);
        this._exitViro = this._exitViro.bind(this);
    }

    // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
    // if you are building a specific type of experience.
    render() {
        if (this.state.navigator === UNSET) {
            return this._getExperienceSelector();
        }  else if (this.state.navigator === AR_NAVIGATOR_TYPE) {
            return this._getARNavigator();
        }
    }

    // Presents the user with a choice of an AR or VR experience
    _getExperienceSelector() {
        return (
            <View style={styles.viroContainer}>
                <ScrollView style={styles.viroContainer} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.welcomeContainer}>
                        <Image
                            source={require('./assets/images/vision.png')}
                            style={styles.welcomeImage}
                        />
                    </View>
                    <View style={styles.outer} >
                        <View style={styles.inner} >
                            <Animatable.Text animation="slideInDown"
                                             iterationCount="infinite"
                                             direction="alternate"
                                             style={styles.titleText}>
                                            Ad~Vision</Animatable.Text>

                            <TouchableHighlight style={styles.buttons}
                                                onPress={() => this.props.navigation.navigate('Welcome')}
                                                underlayColor={'#68a0ff'} >
                                <Animatable.Text animation="pulse"
                                                 easing="ease-out"
                                                 iterationCount="infinite"
                                                 style={styles.buttonText}>Login</Animatable.Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.buttons}
                                                onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
                                                underlayColor={'#68a0ff'} >
                                <Animatable.Text animation="pulse"
                                                 easing="ease-out"
                                                 iterationCount="infinite"
                                                 style={styles.buttonText}>Demo</Animatable.Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }

    // Returns the ViroARSceneNavigator which will start the AR experience
    _getARNavigator() {
        return (
            <View style={{flex: 1}}>
                <ViroARSceneNavigator {...this.state.sharedProps}
                                      initialScene={{scene: ARScene}}/>
                <View style={{position: 'absolute', backgroundColor:"#ffffff22", left: 30, right: 30, top: 30, alignItems: 'center'}}>
                    <Text style={{fontSize:12, color:"#ffffff"}}>Tracking initialized.</Text>
                </View>
                <View style={{position: 'absolute',  left: 5, right: 0, bottom: 15}}>
                    <TouchableHighlight style={styles.back}
                                        onPress={this._exitViro}
                                        underlayColor={'#00000000'} >
                        <Image source={require ('./assets/images/icon_left_w.png')} style={{height: 30, width: 40}}/>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

    // This function returns an anonymous/lambda function to be used
    // by the experience selector buttons
    _getExperienceButtonOnPress(navigatorType) {
        return () => {
            this.setState({
                navigator : navigatorType
            })
        }
    }

    // This function "exits" Viro by setting the navigatorType to UNSET.
    _exitViro() {
        this.setState({
            navigator : UNSET
        })
    }
}

class CustomizeScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Customize Me</Text>
            </View>
        )
    }
}

const AppSwitchNavigator = createSwitchNavigator({
    Welcome: {screen: ViroSample},
    Customize: {screen: CustomizeScreen}
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
    viroContainer :{
        flex : 1,
        backgroundColor: "#fff",
    },
    contentContainer: {
        paddingTop: 130,
    },
    outer : {
        flex : 1,
        flexDirection: 'row',
        alignItems:'center',
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 40,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    inner: {
        flex : 1,
        flexDirection: 'column',
        alignItems:'center',
    },
    titleText: {
        marginTop: 30,
        paddingTop: 30,
        paddingBottom: 20,
        color:'#000',
        textAlign:'center',
        fontFamily: 'Zapfino',
        fontSize : 35,
        fontWeight: 'bold'
    },
    buttonText: {
        color:'#000',
        textAlign:'center',
        fontSize : 18
    },
    back: {
        flex: 1,
        flexDirection: 'row',
        height: 80,
        width: 80,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor:'#00000000',
    },
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
    },
    exitButton : {
        height: 50,
        width: 100,
        paddingTop:10,
        paddingBottom:10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor:'#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    }
});

module.exports = ViroSample;
