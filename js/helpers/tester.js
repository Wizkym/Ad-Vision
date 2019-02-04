'use strict';

import React from "react";

import {
    ViroARImageMarker,
    ViroBox,
    ViroARTrackingTargets,

} from 'react-viro';



export function Target(type, name) {

    let dummyKey = dummyKeyGen();
    alert(dummyKey);

    if (type === "box") {

        renderables.data.push(
            <ViroARImageMarker target={name} key={dummyKey} >
                <ViroBox position={[0, 0, 0]}
                    opacity={0.0}
                    scale={[0.0, 0.0, 0.0]}
                    materials={["apple"]}
                    key={dummyKey}
                    animation={{
                        name: 'plswrk', delay: 3000, run: true
                    }} />
            </ViroARImageMarker>
        );



        if (!renderables.hasBeenFilled) {
            renderables.hasBeenFilled = true;
        }



    }


}
const dummyKeyGen = () => {
    let rnd  = Math.floor(Math.random() * 900000) + 100000;
    return rnd;

}

export const renderables = {
    data: [],
    hasBeenFilled: false
};



