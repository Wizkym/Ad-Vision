
import React from "react";
import { renderables, Target } from "../js/helpers/tester"
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

const initializationTracker = {
    trackersAlreadyMade : false
}

export function emptyTracker() {
    /* for (let x in targets) {
        ViroARTrackingTargets.deleteTarget(x);
    } */

    renderables.data = [];
    renderables.hasBeenFilled = false;
    
}

export function fillAndRender() {
    fillTracker(targets);
    setTimeout( () => {
        renderTrackers()
    }, 300);
        
}



const fillTracker = (obj) => {

    if(!initializationTracker.trackersAlreadyMade){
        ViroARTrackingTargets.createTargets(obj);
        initializationTracker.trackersAlreadyMade = true;
    }else{
        return;
    }
    
};


function renderTrackers() {
    for (let x in targets) {
        /* Target("box", x); */
        Target("box", x);


    }
}




