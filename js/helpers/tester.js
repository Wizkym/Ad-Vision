
import React from "react";
import particle from '../helpers/particle'; 
import {targets} from '../../models/trackingTargets';
import {
    ViroARImageMarker,
    ViroBox,

} from 'react-viro';

export function runTestEmitter () {
    particle.Firework([0, 0, 0], 4200, "fxparttinyglowy.png", false, 1800)

}
export function Target(type, name) {

    //let dummyKey = dummyKeyGen();
    //alert(dummyKey);

    if (type === "box") {
        renderables.data.push(name);
          /*   { <ViroARImageMarker target={name} key={dummyKey} >
                <ViroBox position={[0, 0, 0]}
                    opacity={0.0}
                    scale={[0.0, 0.0, 0.0]}
                    materials={["apple"]}
                    animation={{
                        name: 'plswrk', delay: 3000, run: true,
                        onStart:{runTestEmitter}
                    }} />
            </ViroARImageMarker> } */
        if (!renderables.hasBeenFilled) {
            renderables.hasBeenFilled = true;
        }
    }

    //alert(JSON.stringify(renderables.data));
}
/* const dummyKeyGen = () => {
    let rnd  = Math.floor(Math.random() * 900000) + 100000;
    return rnd;

} */

export let renderables = {
    data: [],
    hasBeenFilled: false
};



