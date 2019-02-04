'use strict';

import React from "react";

import {
    ViroARImageMarker,
    ViroBox,
    ViroARTrackingTargets,

} from 'react-viro';



export function Target(type, name) {

    if (type === "box") {

        renderables.data.push(
            <ViroARImageMarker target={name} >
                <ViroBox position={[0, 0, 0]}
                    opacity={0.0}
                    scale={[0.0, 0.0, 0.0]}
                    materials={["apple"]}
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

export const renderables = {
    data: [],
    hasBeenFilled: false
};



