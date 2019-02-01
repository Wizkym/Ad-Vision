'use strict';

import React from "react";
import { ViroAnimations } from 'react-viro';

export default {

    registerAll() {

        ViroAnimations.registerAnimations({
            animateOpacity1: {
                properties: {
                
                    opacity: 0.1
                },

                easing:"Linear", 
                duration:100
            },
            animateOpacity2: {
                properties: {
                
                    opacity: 0.2
                },

                easing:"Linear", 
                duration:100
            },
            animateOpacity3: {
                properties: {
                
                    opacity: 0.3
                },

                easing:"Linear", 
                duration:100
            },
            animateOpacity4: {
                properties: {
                
                    opacity: 0.4
                },

                easing:"Linear", 
                duration:100
            },
            animateOpacity5: {
                properties: {
                
                    opacity: 0.5
                },

                easing:"Linear", 
                duration:100
            },
            animateOpacity6: {
                properties: {
                
                    opacity: 0.6
                },

                easing:"Linear", 
                duration:100
            },
            animateOpacity7: {
                properties: {
                
                    opacity: 0.7
                },

                easing:"Linear", 
                duration:100
            },
            animateOpacity8: {
                properties: {
                
                    opacity: 0.8
                },

                easing:"Linear", 
                duration:100
            },
            animateOpacity9: {
                properties: {
                
                    opacity: 0.9
                },

                easing:"Linear", 
                duration:100
            },
            animateOpacity10: {
                properties: {
                
                    opacity: 1.0
                },

                easing:"Linear", 
                duration:100
            },
            
            rotate:{properties:{rotateZ:"+=360"}, duration:5000},
            plswrk:[
                ["animateOpacity1","animateOpacity2","animateOpacity3","animateOpacity4","animateOpacity5","animateOpacity6","animateOpacity7", "animateOpacity8",
                "animateOpacity9", "animateOpacity10",   "rotate"],
            ]
        });


    }



}

