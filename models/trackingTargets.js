'use strict'

import React from "react";
import {Target} from "../js/helpers/tester"
import { ViroARTrackingTargets } from "react-viro";

export const targets =
{
    "apple": {
        source: require('../js/res/apple.jpg'),
        orientation: "Up",
        physicalWidth: 0.1 // real world width in meters
    },
    "power": {
        source: require('../js/res/powerade.png'),
        orientation: "Up",
        physicalWidth: .05 // real world width in meters
    },
    "shop": {
        source: require('../js/res/kohls.jpg'),
        orientation: "Up",
        physicalWidth: .2 // real world width in meters
    }
}

export function emptyTracker(){
    for(let x in targets){
        ViroARTrackingTargets.deleteTarget(x);
    }
}

export function fillAndRender(){
    fillTracker.then(() => renderTrackers())
}



const fillTracker = new Promise(function(resolve, reject) {
    resolve(ViroARTrackingTargets.createTargets(targets));

  });

function renderTrackers(){
    for(let x in targets){
        Target("box", x);

        //alert(x);
    }
}




