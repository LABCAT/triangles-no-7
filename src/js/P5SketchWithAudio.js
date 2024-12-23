import React, { useRef, useEffect } from "react";
import "./helpers/Globals";
import "p5/lib/addons/p5.sound";
import * as p5 from "p5";
import { Midi } from '@tonejs/midi'
import PlayIcon from './functions/PlayIcon.js';

import audio from "../audio/triangles-no-7.ogg";
import midi from "../audio/triangles-no-7.mid";
import SpinningTriangle from "./classes/SpinningTriangle.js";
import BackgroundTriangle from "./classes/BackgroundTriangle.js";
import SpinningTriangle2 from "./classes/SpinningTriangle2.js";
import TriangleGlyph from "./classes/TriangleGlyph.js";

/**
 * Glyphs No. 3
 */
const P5SketchWithAudio = () => {
    const sketchRef = useRef();

    const Sketch = p => {

        p.canvas = null;

        p.canvasWidth = window.innerWidth;

        p.canvasHeight = window.innerHeight;

        p.audioLoaded = false;

        p.player = null;

        p.PPQ = 3840 * 4;

        p.bpm = 88;

        p.loadMidi = () => {
            Midi.fromUrl(midi).then(
                function(result) {
                    console.log(result);
                    const noteSet1 = result.tracks[14].notes; // Combinator - Percussve Monks
                    p.scheduleCueSet(noteSet1, 'executeCueSet1');
                    const noteSet2 = result.tracks[10].notes; // Wave Layers Edition - PPG Bass
                    p.scheduleCueSet(noteSet2, 'executeCueSet2');
                    const noteSet3 = result.tracks[12].notes; // Combinator - Percussve Monks
                    p.scheduleCueSet(noteSet3, 'executeCueSet3');
                    const noteSet4 = result.tracks[7].notes; // Europa - Fifth Drops Poly
                    p.scheduleCueSet(noteSet4, 'executeCueSet4');
                    p.audioLoaded = true;
                    document.getElementById("loader").classList.add("loading--complete");
                    document.getElementById("play-icon").classList.remove("fade-out");
                }
            );
            
        }

        p.preload = () => {
            p.song = p.loadSound(audio, p.loadMidi);
            p.song.onended(p.logCredits);
        }

        p.scheduleCueSet = (noteSet, callbackName, poly = false)  => {
            let lastTicks = -1,
                currentCue = 1;
            for (let i = 0; i < noteSet.length; i++) {
                const note = noteSet[i],
                    { ticks, time } = note;
                if(ticks !== lastTicks || poly){
                    note.currentCue = currentCue;
                    p.song.addCue(time, p[callbackName], note);
                    lastTicks = ticks;
                    currentCue++;
                }
            }
        } 

        p.setup = () => {
            p.canvas = p.createCanvas(p.canvasWidth, p.canvasHeight);
            p.background(0);
            p.colorMode(p.HSB);
            p.rectMode(p.CENTER);
            p.angleMode(p.DEGREES);
            p.bgHue = p.random(0, 360);
        }

        p.bgHue = 0;

        p.bgOpacity = 0.9;

        p.draw = () => {
            if(p.audioLoaded && p.song.isPlaying()){
                p.background(p.bgHue, 100, 50, p.bgOpacity);

                for (let i = 0; i < p.backgroundTriangles.length; i++) {
                    const triangle = p.backgroundTriangles[i];
                    triangle.update();
                    triangle.draw();
                }

                for (let i = 0; i < p.spinningTriangles1.length; i++) {
                    const triangle = p.spinningTriangles1[i];
                    triangle.update();
                    triangle.draw();
                }

                for (let i = 0; i < p.animatedGlyphs.length; i++) {
                    const glyph = p.animatedGlyphs[i];
                    glyph.update();
                    glyph.draw();
                }
            }
        }

        p.spinningTriangles1 = [];

        p.lowerHue = 0;

        p.upperHue = 360;

        p.addSpinningTriangle = (note, variation = false) => {
            let x = p.random(p.width / 24, p.width - p.width / 24);
            let y = p.random(p.width / 24, p.height - p.width / 24);
            let width = p.random(p.width / 32, p.width / 24);
            let hue = p.map(note.midi, 12, 60, p.lowerHue, p.upperHue);

            const minWidth = p.width / 64; 
            const maxAttempts = 10;

            let overlap = true;
            let attempts = 0;

            while (overlap && attempts < maxAttempts) {
                overlap = false;
                // Check for overlap with existing triangles
                for (let i = 0; i < p.spinningTriangles1.length; i++) {
                    const triangle = p.spinningTriangles1[i];
                    const dist = p.dist(x, y, triangle.x, triangle.y);
                    if (dist < width * 1) { // If triangles are too close
                        overlap = true;
                        break;
                    }
                }

                if (overlap) {
                    width *= 0.9; // Decrease the size if overlap is detected
                    x = p.random(p.width / 24, p.width - p.width / 24); // Try new X
                    y = p.random(p.width / 24, p.height - p.width / 24); // Try new Y
                    if (width < minWidth) break; // Exit the loop if the size is too small
                }

                attempts++;
            }

            if (!overlap) {
                const className = variation ? SpinningTriangle2 : SpinningTriangle;
                p.spinningTriangles1.push(
                    new className(p, x, y, width, hue)
                );
            }
        }

        p.executeCueSet1 = (note) => {
            const pos = p.getBarAndBeat(note.ticks)
            if([1, 3, 4].includes(pos.bar) && pos.beat === 1 && pos.semiquaver === 1) {
                p.bgHue = p.random(0, 360);
                p.spinningTriangles1 = [];
                p.lowerHue = p.random(0, 120);
                p.upperHue = p.random(240, 360);
            }

            if(note.currentCue < 48) {
                p.addSpinningTriangle(note);
            }
        }

        p.backgroundTriangles = [];

        p.backgroundTrianglesNextSize = undefined;

        p.executeCueSet2 = (note) => {
            let size = !p.backgroundTrianglesNextSize ? Math.min(p.width, p.height) : p.backgroundTrianglesNextSize;
            p.backgroundTriangles.push(
                new BackgroundTriangle(
                    p,
                    p.width / 2,
                    p.height / 2,
                    size,
                    p.random(p.random(0, 60), p.random(300, 360))
                )
            );

            if(note.currentCue > 4) {
                for (let i = 1; i < 8; i++) {
                    setTimeout(
                        () => {
                            size = size * 0.2;
                            p.backgroundTriangles.push(
                                new BackgroundTriangle(
                                    p,
                                    p.width / 2,
                                    p.height / 2,
                                    size,
                                    p.random(p.random(0, 60), p.random(300, 360))
                                )
                            );
                        }, 
                        200 * i
                    );
                }
            }

            p.backgroundTrianglesNextSize = size * 0.9;
        }

        p.executeCueSet3 = (note) => {
            const pos = p.getBarAndBeat(note.ticks)
            
            if([5, 7, 9, 13, 15, 17].includes(pos.bar) && pos.beat === 1 && pos.semiquaver === 1) {
                p.bgHue = p.random(0, 360);
                p.spinningTriangles1 = []; 
                p.lowerHue = p.random(0, 120);
                p.upperHue = p.random(240, 360);
            }
            
            if(note.currentCue <= 64 || note.currentCue > 224) {
                p.addSpinningTriangle(note, true);
            }
        }

        p.animatedGlyphs = [];

        p.executeCueSet4 = (note) => {
            const maxSize = p.width / 64;
            const duration = (note.durationTicks * 60000) / (p.PPQ * p.bpm)
            const triCount = 128;
            const intervalPerTri = (duration * 0.68) / triCount;

            for (let index = 0; index < triCount; index++) {
                const x = p.width / 2;
                const y = p.height / 2;
                const size = p.random(p.width / 256, p.width / 128);
                setTimeout(() => {
                    p.animatedGlyphs.push(
                        new TriangleGlyph(
                            p, 
                            x, 
                            y, 
                            maxSize, 
                            size, 
                            duration
                        )
                    );
                }, intervalPerTri * index);
            }
        }

        p.hasStarted = false;

        p.getBarAndBeat = (ticks) => {
            const beatsPerBar = 4;
            const ticksPerBeat = p.PPQ;
            const ticksPerSemiquaver = ticksPerBeat / 4; // Semiquaver = 1/16th note
            const totalBeats = ticks / ticksPerBeat;
            const barNumber = Math.floor(totalBeats / beatsPerBar) + 1;
            const beatWithinBar = Math.floor(totalBeats % beatsPerBar) + 1;
            const semiquaverPosition = Math.floor((ticks % ticksPerBeat) / ticksPerSemiquaver) + 1;

            return { bar: barNumber, beat: beatWithinBar, semiquaver: semiquaverPosition };
        };

        p.mousePressed = () => {
            if(p.audioLoaded){
                if (p.song.isPlaying()) {
                    p.song.pause();
                } else {
                    if (parseInt(p.song.currentTime()) >= parseInt(p.song.buffer.duration)) {
                        p.reset();
                        if (typeof window.dataLayer !== typeof undefined){
                            window.dataLayer.push(
                                { 
                                    'event': 'play-animation',
                                    'animation': {
                                        'title': document.title,
                                        'location': window.location.href,
                                        'action': 'replaying'
                                    }
                                }
                            );
                        }
                    }
                    document.getElementById("play-icon").classList.add("fade-out");
                    p.canvas.addClass("fade-in");
                    p.song.play();
                    if (typeof window.dataLayer !== typeof undefined && !p.hasStarted){
                        window.dataLayer.push(
                            { 
                                'event': 'play-animation',
                                'animation': {
                                    'title': document.title,
                                    'location': window.location.href,
                                    'action': 'start playing'
                                }
                            }
                        );
                        p.hasStarted = false
                    }
                }
            }
        }

        p.creditsLogged = false;

        p.logCredits = () => {
            if (
                !p.creditsLogged &&
                parseInt(p.song.currentTime()) >= parseInt(p.song.buffer.duration)
            ) {
                p.creditsLogged = true;
                    console.log(
                    "Music By: http://labcat.nz/",
                    "\n",
                    "Animation By: https://github.com/LABCAT/"
                );
                p.song.stop();
            }
        };

        p.reset = () => {

        }

        p.updateCanvasDimensions = () => {
            p.canvasWidth = window.innerWidth;
            p.canvasHeight = window.innerHeight;
            p.canvas = p.resizeCanvas(p.canvasWidth, p.canvasHeight);
        }

        if (window.attachEvent) {
            window.attachEvent(
                'onresize',
                function () {
                    p.updateCanvasDimensions();
                }
            );
        }
        else if (window.addEventListener) {
            window.addEventListener(
                'resize',
                function () {
                    p.updateCanvasDimensions();
                },
                true
            );
        }
        else {
            //The browser does not support Javascript event binding
        }
    };

    useEffect(() => {
        new p5(Sketch, sketchRef.current);
    }, []);

    return (
        <div ref={sketchRef}>
            <PlayIcon />
        </div>
    );
};

export default P5SketchWithAudio;
