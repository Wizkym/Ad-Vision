import React, { Component } from 'react';
import {
    ActivityIndicator,
    AppRegistry,
    Image,
    ScrollView,
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';

const ARScene = require('./HelloWorldSceneAR');

class Customize extends Component {
    constructor() {
        super();
        this._switchToAR = this._switchToAR.bind(this)
    }

    render () {
        return (
                <View style={{flex: 1}}>
                    <View style={{position: 'absolute', backgroundColor:"#ffffff22", left: 30, right: 30, top: 30, alignItems: 'center'}}>
                        <Text style={{fontSize:12, color:"#ffffff"}}>Tracking initialized.</Text>
                    </View>
                </View>
        )

    }

    _switchToAR () {
        this.props.sceneNavigator.push({scene:ARScene});
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