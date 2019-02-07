'use strict';
//A Particle System abstraction meant to speed up the process of implementing Particle Emiter to a desired scene.
import React, { Component } from "react";
import {
    ViroParticleEmitter
} from 'react-viro';
import particle1 from '../res/particles/fxparttinyglowy.png';

//Testing JSX
export default {
    Fountain([...coordinates], duration, source, loopBool) {
        let myParticle = '';
        source === 'fxparttinyglowy.png' ?
            myParticle = particle1
            : myParticle = particle1;

        return (<ViroParticleEmitter
            position={coordinates}
            duration={duration}
            run={true}
            loop={loopBool}

            image={{
                source: myParticle,
                height: 0.1,
                width: 0.1,
                bloomThreshold: 0.0
            }}
            spawnBehavior={{
                particleLifetime: [1000, 1000],
                emissionRatePerSecond: [75, 125],
                maxParticles: 800
            }}
        />
        );
    },
    Explosion([...coordinates], duration, source, loopBool) {
        let myParticle = '';
        source === 'fxparttinyglowy.png' ?
            myParticle = particle1
            : myParticle = particle1;

        return (<ViroParticleEmitter
            position={coordinates}
            duration={duration}
            run={true}
            loop={loopBool}

            image={{
                source: myParticle,
                height: 0.1,
                width: 0.1,
                bloomThreshold: 0
            }}
            spawnBehavior={{
                particleLifetime: [1000, 3000],
                emissionRatePerSecond: [10, 15],
                maxParticles: 100
            }}
            particleAppearance={{
                opacity: {
                    initialRange: [1, 0],
                    factor: "Time",
                    interpolation: [
                        { endValue: 0.5, interval: [0, 500] },
                        { endValue: 1.0, interval: [4000, 5000] }
                    ]
                },
                rotation: {
                    initialRange: [0, 360],
                    factor: "Time",
                    interpolation: [
                        { endValue: 1080, interval: [0, 5000] },
                    ]
                },
                color: {
                    initialRange: [0, 360],
                    factor: "Time",
                    interpolation: [
                        { endValue: "rgb(253, 19, 76)", interval: [0, 1000] },
                        { endValue: "rgb(220, 4, 10)", interval: [2300, 3000] },
                        { endValue: "rgb(5, 249, 85)", interval: [3333, 4000] }


                    ]
                }

            }}
            particlePhysics={{
                velocity: {
                    initialRange: [[1, .5, 1], [1, 1, 0]]
                },

            }}

        />
        );

    },
    Firework([...coordinates], duration, source, loopBool, delay) {

        let myParticle = '';
        source === 'fxparttinyglowy.png' ?
            myParticle = particle1
            : myParticle = particle1;


        return (
        
        <ViroParticleEmitter
            position={coordinates}
            duration={duration}
            run={true}
            loop={loopBool}
            delay={delay || 0}
            fixedToEmitter={false}



            image={{
                source: myParticle,
                height: 0.1,
                width: 0.1,
                bloomThreshold: 0.0
            }}

            spawnBehavior={{
                particleLifetime: [duration / 2, duration / 2],
                emissionRatePerSecond: [0, 0],
                emissionBurst: [
                    { time: 0, min: 300, max: 350, cycles: 1 }
                ],
                spawnVolume: { shape: "sphere", params: [0.15], spawnOnSurface: true },
            }}

            particleAppearance={{
                opacity: {
                    initialRange: [1.0, 1.0],
                    factor: "Time",
                    interpolation: [
                        { endValue: 0.0, interval: [800, 1200] }
                    ]
                },

                color: {
                    initialRange: ["#0c0093", "#92008b"],
                    factor: "Time",
                    interpolation: [
                        { endValue: "#00ff1d", interval: [300, 1200] }
                    ]
                }
            }}

            particlePhysics={{
                explosiveImpulse: { impulse: 0.12, position: [0, 0,0], decelerationPeriod: 1.0 },
            }}
        />
        );

    },
    Spark([...coordinates], duration, source, loopBool) {

        let myParticle = '';
        source === 'fxparttinyglowy.png' ?
            myParticle = particle1
            : myParticle = particle1;


        return (
        
        <ViroParticleEmitter
            position={coordinates}
            duration={duration}

            run={true}
            loop={loopBool}
            fixedToEmitter={false}

            image={{
                source: myParticle,
                height: 0.1,
                width: 0.1,
                bloomThreshold: 0.0
            }}

            spawnBehavior={{
                particleLifetime: [duration / 2, duration / 2],
                emissionRatePerSecond: [0, 0],
                emissionBurst: [
                    { time: 0, min: 300, max: 350, cycles: 1 }
                ],
                spawnVolume: { shape: "sphere", params: [0.15], spawnOnSurface: false },
            }}

            particleAppearance={{
                opacity: {
                    initialRange: [1.0, 1.0],
                    factor: "Time",
                    interpolation: [
                        { endValue: 0.0, interval: [800, 1200] }
                    ]
                },

                color: {
                    initialRange: ["#0c0093", "#92008b"],
                    factor: "Time",
                    interpolation: [
                        { endValue: "#00ff1d", interval: [300, 1200] }
                    ]
                }
            }}

            particlePhysics={{
                explosiveImpulse: { impulse: 1, position: [0, 0,0], decelerationPeriod: 1.0 },
            }}
        />
        );
        }







}

