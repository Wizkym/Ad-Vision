'use strict';

import React from "react";
import { ViroAnimations } from 'react-viro';

export default {
    callback(func){
        func;
    },
    registerAll() {

        ViroAnimations.registerAnimations({
            animateBlock:{
                properties:{
                    scaleX: 0.1,
                    scaleY:0.1,
                    scaleZ:0.1,
                    opacity: 1.0
                },
                easing: "Bounce",
                duration: 1000
            },
            animateRight:{
                properties:{
                    positionX: 0.09,
                    opacity: 1.0
                },
                easing: "Bounce",
                duration: 800
            },
            animateDown:{
                properties:{
                    positionZ : 0.14,
                    positionX: -0.2,
                    opacity: 1.0
                },
                easing: "Bounce",
                duration: 800
            },
            animateUp:{
                properties:{
                    positionZ : -0.09,
                    opacity: 1.0
                },
                easing: "Bounce",
                duration: 800
            },
            animateDownText:{
                properties:{
                    positionZ : 0.13,
                    opacity: 1.0
                },
                easing: "Bounce",
                duration: 800
            },
            animateModel:{
                properties:{
                    positionZ : -0.13,
                    positionX: 0.13,
                    opacity: 1.0
                },
                easing: "Bounce",
                duration: 800
            },
            animateOpacity1: {
                properties: {
                    scaleX: 0.01,
                    scaleY:0.01,
                    scaleZ:0.01,
                    opacity: 0.1
                },

                easing:"Linear", 
                duration:1000
            },
            animateOpacity2: {
                properties: {
                    scaleX: 0.02,
                    scaleY:0.02,
                    scaleZ:0.02,
                    opacity: 0.2
                },

                easing:"Linear", 
                duration:70
            },
            animateOpacity3: {
                properties: {
                    scaleX: 0.03,
                    scaleY:0.03,
                    scaleZ:0.03,
                    opacity: 0.3
                },

                easing:"Linear", 
                duration:70
            },
            animateOpacity4: {
                properties: {
                    scaleX: 0.04,
                    scaleY:0.04,
                    scaleZ:0.04,
                    opacity: 0.4
                },

                easing:"Linear", 
                duration:70
            },
            animateOpacity5: {
                properties: {
                    scaleX: 0.05,
                    scaleY:0.05,
                    scaleZ:0.05,
                    opacity: 0.5
                },

                easing:"Linear", 
                duration:70
            },
            animateOpacity6: {
                properties: {
                    scaleX: 0.06,
                    scaleY:0.06,
                    scaleZ:0.06,
                    opacity: 0.6
                },

                easing:"Linear", 
                duration:70
            },
            animateOpacity7: {
                properties: {
                    scaleX: 0.07,
                    scaleY:0.07,
                    scaleZ:0.07,
                    opacity: 0.7
                },

                easing:"Linear", 
                duration:70
            },
            animateOpacity8: {
                properties: {
                    scaleX: 0.08,
                    scaleY:0.08,
                    scaleZ:0.08,
                    opacity: 0.8
                },

                easing:"Linear", 
                duration:70
            },
            animateOpacity9: {
                properties: {
                    scaleX: 0.09,
                    scaleY:0.09,
                    scaleZ:0.09,
                    opacity: 0.9
                },

                easing:"Linear", 
                duration:70
            },
            animateOpacity10: {
                properties: {
                    scaleX: 0.1,
                    scaleY:0.1,
                    scaleZ:0.1,
                    opacity: 1.0
                },

                easing:"Bounce", 
                duration:1000
            },
            
            rotate:{properties:{rotateZ:"+=360"}, duration:60000},
            plswrk:[
                ["animateOpacity1","animateOpacity2","animateOpacity3","animateOpacity4","animateOpacity5","animateOpacity6","animateOpacity7", "animateOpacity8",
                "animateOpacity9", "animateOpacity10"],
            ],
            moveAndRotate:[
                ["animateModel", "rotate"]
            ],
            mainBox:[
                ["animateBlock", "rotate"]
            ]
        });


    }



}

