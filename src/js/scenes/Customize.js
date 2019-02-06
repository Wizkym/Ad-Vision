import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import styles from '../../assets/styles/styles';
import CheckBox from 'react-native-check-box'

const UNSET = "UNSET";
const AR_NAVIGATOR_TYPE = "AR";


export default class Customize extends Component {
    render() {
        return <View style={styles.customMain}>
            <View style={styles.welcomeContainer}>
                <Image source={require('../res/cust.jpg')}
                       style={{position: 'absolute', top: -250, left: 0, right: 0, bottom: 0, height: 270, width: 380}}
                       fadeDuration={10}/>
            </View>
            <View>
                <Text style={{fontFamily: 'Zapfino', fontWeight: 'bold', fontSize: 25}}>Customize your experience</Text>
            </View>
            <View style={styles.topics}>
                <Text>Home</Text>
                <CheckBox onClick={() => this.props._checkBoxText('Home')}
                          isChecked={this.props.homeIsChecked}
                          leftText={"Home"}/>
            </View>
            <View style={styles.topics}>
                <Text>Technology</Text>
                <CheckBox onClick={() => this.props._checkBoxText('Technology')}
                          isChecked={this.props.techIsChecked}
                          leftText={"Technology"}/>
            </View>
            <View style={styles.topics}>
                <Text>Art</Text>
                <CheckBox onClick={() => this.props._checkBoxText('Art')}
                          isChecked={this.props.artIsChecked}
                          leftText={"Art"}/>
            </View>
            <View style={styles.topics}>
                <Text>Education</Text>
                <CheckBox onClick={() => this.props._checkBoxText('Education')}
                          isChecked={this.props.educationIsChecked}
                          leftText={"Education"}/>
            </View>
            <View style={{position: 'absolute', left: 5, right: 0, bottom: 15}}>
                <TouchableHighlight style={styles.back}
                                    onPress={this.props._getExperienceButtonOnPress(UNSET)}
                                    underlayColor={'#00000000'}>
                    <Image source={require('../res/icon_back.png')} style={{height: 30, width: 40}}/>
                </TouchableHighlight>
            </View>
            <View style={{position: 'absolute', right: 0, bottom: 15,}}>
                <TouchableHighlight style={styles.back}
                                    // onPress={this.props._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
                                    onPress={this.props._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
                                    underlayColor={'#00000000'}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>START</Text>
                </TouchableHighlight>
            </View>
        </View>
    }
}
