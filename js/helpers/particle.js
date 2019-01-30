'use strict';
//A Particle System abstraction meant to speed up the process of implementing Particle Emiter to a desired scene.
import React, { Component } from "react";
import {
    ViroParticleEmitter
} from 'react-viro';
import particle1 from '../res/particles/fxparttinyglowy.png';

//Testing JSX
export function Fountain([...coordinates], duration, source) {
    let myParticle = '';
    source === 'fxparttinyglowy.png'?
        myParticle = particle1
        : myParticle = particle1;

    return (<ViroParticleEmitter
        position={coordinates}
        duration={duration}
        run={true}
        loop={true}

        image={{
            source: myParticle,
            height: 0.2,
            width: 0.2,
        }}
    />
    );
}

