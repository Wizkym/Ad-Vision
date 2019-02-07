import React, { Component } from 'react';
import {
    Image,
    ScrollView,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import Customize from './Customize';
import styles from '../../assets/styles/styles';
import Share from 'react-native-share';
import Video from 'react-native-video';
import {
    ViroARSceneNavigator,
    ViroConstants} from 'react-viro';
import * as Animatable from 'react-native-animatable';
import { emptyTracker, fillAndRender } from '../../models/trackingTargets';
import Status from '../components/Status';


/*
 TODO: Insert your API key below
 */
const sharedProps = {
    apiKey: "2491314B-56CD-4153-9187-17C7A7CDB6FD",
};

// Sets the default scene you want for AR and VR
const ARScene = require('./VisionAR');
const UNSET = "UNSET";
const AR_NAVIGATOR_TYPE = "AR";
const LOGIN_NAVIGATOR_TYPE = "LOGIN";
const REFRESH_NAVIGATOR_TYPE = "REFRESH";
const SHARE = 'SHARE';

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
let defaultNavigatorType = UNSET;

export default class Landing extends Component {
    constructor() {
        super();
        this.state = {
            navigator: defaultNavigatorType,
            sharedProps: sharedProps,
            hits: [],
            haveSavedMedia: false,
            noneChecked: false,
            homeIsChecked: false,
            artIsChecked: false,
            techIsChecked: false,
            educationIsChecked: false,
            photoPermission: '',
            cameraPermission: '',
            screenshot_count: 0,
            imgUrl: '',
            trackingActive: false,
            trackingCount: 0,
            infoReturned: ''
        };

        this._getExperienceSelector = this._getExperienceSelector.bind(this);
        this._getARNavigator = this._getARNavigator.bind(this);
        this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(this);
        this._exitViro = this._exitViro.bind(this);
        this._renderShareScreen = this._renderShareScreen.bind(this);
        this._setARNavigatorRef = this._setARNavigatorRef.bind(this);
        this._checkBoxText = this._checkBoxText.bind(this);
        this._handlePress = this._handlePress.bind(this);
        this._takeScreenShot = this._takeScreenShot.bind(this);
        this._toggleTargeting = this._toggleTargeting.bind(this);
        this._refreshScene = this._refreshScene.bind(this);
        this._checkIfTrackingCountExceeds = this._checkIfTrackingCountExceeds.bind(this);
    }

    // Conditional rendering
    render() {
        if (this.state.navigator === UNSET) {
            return this._getExperienceSelector();
        } else if (this.state.navigator === LOGIN_NAVIGATOR_TYPE) {
            return this._getCustomizeScreen();
        } else if (this.state.navigator === AR_NAVIGATOR_TYPE) {
            return this._getARNavigator();
        } else if (this.state.navigator === SHARE) {
            return this._renderShareScreen();
        } else if (this.state.navigator === REFRESH_NAVIGATOR_TYPE) {
            return this._refreshScene();
        }
    }

    _refreshScene() {
        return (
            <View style={styles.viroContainer}>
                <ScrollView style={styles.viroContainer} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.outer}>
                        <View style={styles.inner}>
                            <Animatable.Text animation="slideInDown"
                                             iterationCount="infinite"
                                             direction="alternate"
                                             style={styles.titleText}>
                                Refreshing AR Scene</Animatable.Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }

    // Presents the user with a choice of an AR or VR experience
    _getExperienceSelector() {
        return (
            <View style={styles.viroContainer}>
                <ScrollView style={styles.viroContainer} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.welcomeContainer}>
                        <Image
                            source={require('../res/vision.png')}
                            style={styles.welcomeImage}
                            fadeDuration={10}
                        />
                    </View>
                    <View style={styles.outer}>
                        <View style={styles.inner}>
                            <Animatable.Text animation="slideInDown"
                                             iterationCount="infinite"
                                             direction="alternate"
                                             style={styles.titleText}>
                                Ad~Vision</Animatable.Text>

                            <TouchableHighlight style={styles.buttons}
                                                onPress={this._getExperienceButtonOnPress(LOGIN_NAVIGATOR_TYPE)}
                                                underlayColor={'#68a0ff'}>
                                <Animatable.Text animation="pulse"
                                                 easing="ease-out"
                                                 iterationCount="infinite"
                                                 style={styles.buttonText}>Login</Animatable.Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.buttons}
                                                onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
                                                underlayColor={'#68a0ff'}>
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
    // NOTE: make refresh button that refreshes the entire scence. BC once you switch to the Customize scence and return to ARScene,
    //You are are to render the models again ( seems like you only track to images on Andriod haven't tested on IOS)
    _getARNavigator() {
        return (
            <View style={{flex: 1}}>
                <ViroARSceneNavigator {...this.state.sharedProps}
                                      initialScene={{scene: ARScene}}
                                      numberOfTrackedImages={5}
                                      ref={this._setARNavigatorRef}
                                      viroAppProps={{text: this.state.infoReturned}}
                />

                <Status
                    tracking={this.state.trackingActive}
                    onPress={this._toggleTargeting}
                />

                <View style={{position: 'absolute', left: 5, right: 0, bottom: 15}}>
                    <TouchableHighlight style={styles.back}
                                        onPress={this._getExperienceButtonOnPress(LOGIN_NAVIGATOR_TYPE)}
                                        underlayColor={'#00000000'}>
                        <Image source={require('../res/icon_left_w.png')} style={{height: 30, width: 40}}/>
                    </TouchableHighlight>
                </View>

                <View style={{position: 'absolute', left: 175, right: 0, bottom: 15}}>
                    <TouchableHighlight style={styles.back}
                                        onPress={this._takeScreenShot}
                                        underlayColor={'#00000000'}>
                        <Image source={require('../res/icon_360_w.png')} style={{height: 30, width: 40}}/>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

    _toggleStatus() {
        if (!this.state.tracking) {
            this.setState({
                tracking: true
            });
        } else {
            this.setState({
                tracking: false
            });
        }
    }

    // Returns the Customize Screen
    _getCustomizeScreen = () => (
        <Customize _getExperienceButtonOnPress={this._getExperienceButtonOnPress}
                   _checkBoxText={this._checkBoxText}
                   homeIsChecked={this.state.homeIsChecked}
                   artIsChecked={this.state.artIsChecked}
                   techIsChecked={this.state.techIsChecked}
                   educationIsChecked={this.state.educationIsChecked}
                   _exitViro={this._exitViro}
                   _handlePress={this._handlePress}
        />
    );

    // Helper function called while initializing <ViroARSceneNavigator>
    _setARNavigatorRef(ARNavigator) {
        this._arNavigator = ARNavigator;
    }

    // This function returns an anonymous/lambda function to be used
    // by the experience selector buttons
    _getExperienceButtonOnPress(navigatorType) {
        return () => {
            this.setState({
                navigator: navigatorType
            });
            if (navigatorType === 'UNSET') {
                this.setState({
                    noneChecked: false,
                    homeIsChecked: false,
                    artIsChecked: false,
                    techIsChecked: false,
                    educationIsChecked: false
                });
            }
        }
    }

    // This function "exits" Viro by setting the navigatorType to UNSET.
    _exitViro() {
        this.setState({
            navigator: UNSET
        })
    }

    _checkIfTrackingCountExceeds() {
        if (this.state.trackingCount >= 2) {
            let newState = {...this.state}
            newState.trackingCount = 0;
            newState.navigator = REFRESH_NAVIGATOR_TYPE;
            this.setState(newState);

            setTimeout(() => {
                let newState = {...this.state}
                newState.trackingCount = 0;
                newState.navigator = AR_NAVIGATOR_TYPE;
                this.setState(newState);
            }, 1000)
        } else {
            return;
        }

    }

    _toggleTargeting() {
        if (!this.state.trackingActive) {
            let newState = {...this.state};
            newState.trackingActive = true;
            newState.trackingCount = newState.trackingCount + 1;
            this.setState(newState);
            fillAndRender();
            this._checkIfTrackingCountExceeds();

        } else {
            let newState = {...this.state};
            newState.trackingActive = false;

            this.setState(newState);
            emptyTracker();

        }

    }

    // Checkbox Function
    _checkBoxText = (topic) => {
        topic === 'Home' ?
            this.setState({
                homeIsChecked: !this.state.homeIsChecked
            })
            : topic === 'Technology' ?
            this.setState({
                techIsChecked: !this.state.techIsChecked
            })
            : topic === 'Art' ?
                this.setState({
                    artIsChecked: !this.state.artIsChecked
                })
                : topic === 'Education' ?
                    this.setState({
                        educationIsChecked: !this.state.educationIsChecked
                    })
                    : this.setState({
                        noneChecked: !this.state.noneChecked
                    });
    };

    // Screenshots
    _takeScreenShot() {
        this._arNavigator.sceneNavigator.takeScreenshot("vision_still_" + this.state.screenshot_count, false)
            .then((retDict) => {
                if (!retDict.success) {
                    if (retDict.errorCode === ViroConstants.RECORD_ERROR_NO_PERMISSION) {
                        alert("Please allow camera permissions!");
                    }
                }
                let currentCount = this.state.screenshot_count + 1;
                this.setState({
                    imgUrl: "file://" + retDict.url,
                    screenshot_count: currentCount,
                    navigator: SHARE
                });
                alert('Screenshot Check');
            })
            .catch(err => {
                alert('This dont work!');
            });
    }

    // Share Screen
    _renderShareScreen() {
        return (
            <View style={styles.shareScreenContainerTransparent}>
                <Image source={{uri: this.state.imgUrl}} style={styles.backgroundImage} resizeMethod={'resize'}/>

                {/* Close button -> Takes user back to AR screen */}
                <View style={{position: 'absolute', left: 20, top: 20, width: 30, height: 30}}>
                    <TouchableHighlight style={styles.back}
                                        onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
                                        underlayColor={'#00000000'}>
                        <View>
                            <Image source={require('../res/btn_close.png')}
                                   style={{position: 'absolute', height: 23, width: 23}}/>
                        </View>
                    </TouchableHighlight>
                </View>

                {/* Share button -> For users to share screenshots */}
                <View style={{position: 'absolute', left: 20, bottom: 20, width: 40, height: 40}}>
                    <TouchableHighlight style={styles.back}
                                        onPress={this._openShareActionSheet}
                                        underlayColor={'#00000000'}>
                        <View>
                            <Image source={require('../res/btn_share.png')}
                                   style={{position: 'absolute', height: 35, width: 35}}/>
                        </View>
                    </TouchableHighlight>
                </View>

                {/* Analytics Button -> For users to analyze images using Cloud Vision API*/}
                <View style={{position: 'absolute', right: 20, bottom: 20, width: 40, height: 40}}>
                    <TouchableHighlight style={styles.back}
                                        onPress={this._handlePress}
                                        underlayColor={'#00000000'}>
                        <View>
                            <Image source={require('../res/analytics-128.png')}
                                   style={{position: 'absolute', height: 35, width: 35}}/>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }

    // Google Cloud Vision function
    _handlePress = async () => {
        let filePath = this.state.imgUrl;
        let name = "vision_still_" + this.state.screenshot_count + ".png";
        let type = 'image/png';
        alert(name);

        const file = {
            uri: filePath,
            name: name,
            type: type
        };
        const data = new FormData();
        data.append('photo', file);

        /*
            TODO: Insert your ip address below
        */
        fetch('http://10.136.13.80:3085/', {
            method: 'POST',
            body: data
        })
            .then(response => response.json())
            .then((response) => {
                this.setState({
                    infoReturned: response.snip,
                    navigator: AR_NAVIGATOR_TYPE
                });
                alert(this.state.infoReturned);
            })
            .catch(err => alert(err));
    };

    // Share function to enable users share screenshots
    _openShareActionSheet = async () => {
        await Share.open({
            subject: "#AdVision",
            message: "#AdVision",
            url: this.state.imgUrl,
            type: "image/png"
         });
    }

}
