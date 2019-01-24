import React, { Component } from 'react';
import {
    Image,
    ScrollView,
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';

import CheckBox from 'react-native-check-box'
import { ViroARSceneNavigator, ViroSceneNavigator } from 'react-viro';
import * as Animatable from 'react-native-animatable';

/*
 TODO: Insert your API key below
 */
const sharedProps = {
    apiKey:"2491314B-56CD-4153-9187-17C7A7CDB6FD",
};

// Sets the default scene you want for AR and VR
const ARScene = require('./js/scenes/HelloWorldSceneAR');
const UNSET = "UNSET";
const AR_NAVIGATOR_TYPE = "AR";
const LOGIN_NAVIGATOR_TYPE ="LOGIN";

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
let defaultNavigatorType = UNSET;

export default class ViroSample extends Component {
    constructor() {
        super();
        this.state = {
            navigator : defaultNavigatorType,
            sharedProps : sharedProps,
            noneChecked: false,
            homeIsChecked: false,
            artIsChecked: false,
            techIsChecked: false,
            educationIsChecked: false
        };

        this._getExperienceSelector = this._getExperienceSelector.bind(this);
        this._getARNavigator = this._getARNavigator.bind(this);
        this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(this);
        this._getCustomizeScreen = this._getCustomizeScreen.bind(this);
        this._exitViro = this._exitViro.bind(this);
    }

    // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
    // if you are building a specific type of experience.
    render() {
        if (this.state.navigator === UNSET) {
            return this._getExperienceSelector();
        }  else if (this.state.navigator === LOGIN_NAVIGATOR_TYPE) {
            return this._getCustomizeScreen();
        }else if (this.state.navigator === AR_NAVIGATOR_TYPE) {
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
                            fadeDuration={10}
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
                                                onPress={this._getExperienceButtonOnPress(LOGIN_NAVIGATOR_TYPE)}
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
                                        onPress={this._getExperienceButtonOnPress(LOGIN_NAVIGATOR_TYPE)}
                                        underlayColor={'#00000000'} >
                        <Image source={require ('./assets/images/icon_left_w.png')} style={{height: 30, width: 40}}/>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

    // Returns the Customize Screen
    _getCustomizeScreen = () => (
        <View style={styles.customMain}>
            <View style={styles.welcomeContainer}>
                <Image
                    source={require('./assets/images/cust.jpg')}
                    style={{position: 'absolute', top: -250, left: 0, right: 0, bottom: 0, height: 270, width: 380 }}
                    fadeDuration={10}
                />
            </View>
            <View>
                <Text style={{fontFamily: 'Zapfino', fontWeight: 'bold', fontSize: 25}}>Customize your experience</Text>
            </View>
            <View style={styles.topics}>
                <Text>Home</Text>
                <CheckBox onClick={() => this._checkBoxText('Home')}
                      isChecked={this.state.homeIsChecked}
                      leftText={"Home"}/>
            </View>
            <View style={styles.topics}>
                <Text>Technology</Text>
                <CheckBox onClick={() => this._checkBoxText('Technology')}
                          isChecked={this.state.techIsChecked}
                          leftText={"Technology"}/>
            </View>
            <View style={styles.topics}>
                <Text>Art</Text>
                <CheckBox onClick={() => this._checkBoxText('Art')}
                          isChecked={this.state.artIsChecked}
                          leftText={"Art"}/>
            </View>
            <View style={styles.topics}>
                <Text>Education</Text>
                <CheckBox onClick={() => this._checkBoxText('Education')}
                          isChecked={this.state.educationIsChecked}
                          leftText={"Education"}/>
            </View>
            <View style={{position: 'absolute',  left: 5, right: 0, bottom: 15}}>
                <TouchableHighlight style={styles.back}
                                    onPress={this._getExperienceButtonOnPress(UNSET)}
                                    underlayColor={'#00000000'} >
                    <Image source={require ('./assets/images/icon_back.png')} style={{height: 30, width: 40}}/>
                </TouchableHighlight>
            </View>
            <View style={{position: 'absolute', right: 0, bottom: 15, }}>
                <TouchableHighlight style={styles.back}
                                    onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
                                    underlayColor={'#00000000'} >
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>START</Text>
                </TouchableHighlight>
            </View>
        </View>
    );


    // This function returns an anonymous/lambda function to be used
    // by the experience selector buttons
    _getExperienceButtonOnPress(navigatorType) {
        return () => {
            this.setState({
                navigator : navigatorType
            });
            if(navigatorType === 'UNSET') {
                this.setState({
                    noneChecked: false,
                    homeIsChecked: false,
                    artIsChecked: false,
                    techIsChecked: false,
                    educationIsChecked: false});
            }
        }
    }

    // This function "exits" Viro by setting the navigatorType to UNSET.
    _exitViro() {
        this.setState({
            navigator : UNSET
        })
    }

    // Checkbox Function
    _checkBoxText = (topic) => {
        topic === 'Home'?
            this.setState({
                homeIsChecked:!this.state.homeIsChecked
            })
            : topic === 'Technology'?
                this.setState({
                    techIsChecked:!this.state.techIsChecked
                })
                : topic === 'Art'?
                    this.setState({
                        artIsChecked:!this.state.artIsChecked
                    })
                    : topic === 'Education'?
                        this.setState({
                            educationIsChecked:!this.state.educationIsChecked
                        })
                        : this.setState({
                        noneChecked:!this.state.noneChecked
                        });
    };
}

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
        height: 95,
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
    customMain: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingTop: 35,
        paddingBottom: 45,
        paddingLeft: 0,
        paddingRight: 0
    },
    topics: {
        height: 50,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
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
