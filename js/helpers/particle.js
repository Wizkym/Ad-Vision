'use strict';
//A Particle System abstraction meant to speed up the process of implementing Particle Emiter to a desired scene.
import React, { Component } from "react";

import {

    ViroParticleEmitter
} from 'react-viro';

//Testing JSX

export function Fountain([...coordinates], duration, source) {

    let photo = `${source}`;

    return (<ViroParticleEmitter
        position={coordinates}
        duration={duration}
        run={true}

        image={{
            source: require("../res/particles/" + photo),
            height: 0.1,
            width: 0.1,
        }}
    />
    );
}



/*         reactFountain = ([...coordiantes], duration, autoStart, source) => {
        return (<ViroParticleEmitter
            position={coordiantes}
            duration={duration}
            run={autoStart || true}

            image={{
                source:require(`./res/particles/${source}`),
                height:0.1,
                width:0.1,
            }}
        />
        );
    } */






