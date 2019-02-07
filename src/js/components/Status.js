import  React, { Component } from 'react';
import {
    Image,
    ScrollView,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';


import styles from '../../assets/styles/styles';

class Status extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracking: false
        }
        //this._toggleStatus = this._toggleStatus.bind(this);
    }
    onPress = () => {

        if(!this.state.tracking){
            this.setState({
                tracking: true
            });
        }else{
            this.setState({
                tracking: false
            });
        } 
   
    }
    _updateText = () => {
        let newState = {...this.state};
        newState.myText = "byeee";
        this.setState(newState);

    }
    render() {
        return (
            <View style={{ position: 'absolute', backgroundColor: "#ffffff22", left: 30, right: 30, top: 30, alignItems: 'center' }}>
                <Text style={{ fontSize: 12, color: "#ffffff" }} >{this.props.tracking ? "Tracking Activated" : "Tracking Disabled"}</Text>
               
                    <TouchableHighlight onPress={this.props.onPress}  style={styles.back}>
                        <Image  source={require('../res/btn_feature_color_white.png')} style={{ height: 80, width: 80 }} />
                    </TouchableHighlight>
           

            </View>

        );

    }


}

export default Status;