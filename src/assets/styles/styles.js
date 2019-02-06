import { StyleSheet } from 'react-native';

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
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        resizeMode:'stretch',
    },
    shareScreenContainerTransparent: {
        position : 'absolute',
        flex:1,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        alignItems:'center',
        backgroundColor : '#000000',
    }
});

export default styles;