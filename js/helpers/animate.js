'use strict';

import React from "react";
import { ViroAnimations } from 'react-viro';

export default {

    registerAll() {

        ViroAnimations.registerAnimations({
            animateScale: {
                properties: {
                    scaleX: 1.0, scaleY: 1.0, scaleZ: 1.0,
                    opacity: 1.0
                },
                easing:"Linear", 
                duration: 5000
            },
        });

        console.log("animations have been registered");


    }



}

