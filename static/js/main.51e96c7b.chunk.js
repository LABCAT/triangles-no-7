(this["webpackJsonptriangles-no-7"]=this["webpackJsonptriangles-no-7"]||[]).push([[0],{15:function(t,i,s){},31:function(t,i,s){"use strict";s.r(i);var e=s(1),h=s.n(e),n=s(9),a=s.n(n),o=(s(15),s(2));window.p5=o;s(20);var r=s(10),d=s(0);function c(){return Object(d.jsxs)("svg",{id:"play-icon",className:"fade-out",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[Object(d.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(d.jsx)("path",{d:"M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})]})}var l=s.p+"static/media/triangles-no-7.685dae77.ogg",p=s.p+"static/media/triangles-no-7.a3f1c683.mid";class u{constructor(t,i,s,e,h){this.p=t,this.x=i,this.y=s,this.hue=h,this.width=e/4,this.maxWidth=e,this.rotation=0,this.clockwise=Math.random()>.5}update(){this.width<this.maxWidth&&(this.width=this.width+.5*Math.random()),this.clockwise?this.rotation++:this.rotation--}draw(){const t=this.width*this.p.cos(0),i=this.width*this.p.sin(0),s=this.width*this.p.cos(120),e=this.width*this.p.sin(120),h=this.width*this.p.cos(240),n=this.width*this.p.sin(240);this.p.translate(this.x,this.y),this.p.rotate(this.rotation),this.p.strokeWeight(2),this.p.stroke(this.hue,0,100),this.p.fill(this.hue,100,100,.25),this.p.triangle(t,i,s,e,h,n),this.p.scale(.8),this.p.stroke(this.hue,100,100),this.p.fill(this.hue,100,25,.75),this.p.triangle(0,0,s,e,h,n),this.p.fill(this.hue,100,50,.75),this.p.triangle(t,i,0,0,h,n),this.p.fill(this.hue,100,75,.75),this.p.triangle(t,i,s,e,0,0),this.p.scale(1.25),this.p.rotate(-this.rotation),this.p.translate(-this.x,-this.y)}}class g{constructor(t,i,s,e,h){this.p=t,this.x=i,this.y=s,this.width=e/16,this.hue=h}update(){this.width=this.width+8}draw(){const t=this.width*this.p.cos(0),i=this.width*this.p.sin(0),s=this.width*this.p.cos(120),e=this.width*this.p.sin(120),h=this.width*this.p.cos(240),n=this.width*this.p.sin(240);this.p.translate(this.x,this.y),this.p.rotate(30),this.p.stroke(this.hue,0,100),this.p.strokeWeight(4),this.p.fill(this.hue,100,100,.25),this.p.triangle(t,i,s,e,h,n),this.p.rotate(-30),this.p.translate(-this.x,-this.y)}}class w extends u{draw(){const t=this.width*this.p.cos(0),i=this.width*this.p.sin(0),s=this.width*this.p.cos(120),e=this.width*this.p.sin(120),h=this.width*this.p.cos(240),n=this.width*this.p.sin(240),a=this.width/2,o=a*this.p.cos(0),r=a*this.p.sin(0),d=a*this.p.cos(120),c=a*this.p.sin(120),l=a*this.p.cos(240),p=a*this.p.sin(240);this.p.translate(this.x,this.y),this.p.rotate(this.rotation),this.p.strokeWeight(2),this.p.stroke(this.hue,100,70),this.p.fill(this.hue,100,100,.25),this.p.triangle(t,i,s,e,h,n),this.p.stroke(this.hue,100,100);const u=(t+s+h)/3,g=(i+e+n)/3;this.p.fill(this.hue,100,70,.5),this.p.triangle(t,i,(t+u)/2,(i+g)/2,(s+u)/2,(e+g)/2),this.p.fill(this.hue,100,60,.5),this.p.triangle(s,e,(s+u)/2,(e+g)/2,(h+u)/2,(n+g)/2),this.p.fill(this.hue,100,50,.5),this.p.triangle(h,n,(h+u)/2,(n+g)/2,(t+u)/2,(i+g)/2),this.p.stroke(this.hue,0,80),this.p.fill(this.hue,100,80,.5),this.p.triangle(o,r,d,c,l,p),this.p.rotate(-this.rotation),this.p.translate(-this.x,-this.y)}}class m{constructor(t,i,s,e){let h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";this.p=t,this.hue=this.p.random(0,360),this.origin=this.p.createVector(i,s),this.width=h,this.maxWidth=e,this.rotation=0,this.lifeTime=n||this.p.random(5e3,15e3),this.startTime=this.p.millis(),this.endTime=this.startTime+this.lifeTime;const o=this.p.random(0,this.p.height),r=this.p.random(0,this.p.width);switch(this.direction=a||this.p.random(["left","right","up","down"]),this.direction){case"left":this.destination=this.p.createVector(0,o);break;case"right":this.destination=this.p.createVector(this.p.width,o);break;case"up":this.destination=this.p.createVector(r,0);break;case"down":this.destination=this.p.createVector(r,this.p.height)}this.clockwiseRotation=Math.random()<.5}update(){this.width<this.maxWidth&&(this.width=this.width+Math.random()/4),this.clockwiseRotation?this.rotation++:this.rotation--}draw(){const t=0-this.width/2,i=0+this.width/2,s=0-this.width/2,e=0+this.width/2,h=0+this.width/2,n=this.p.millis();if(n<this.endTime){const a=this.p.min(1,(n-this.startTime)/(this.endTime-this.startTime)),o=window.p5.Vector.sub(this.destination,this.origin).mult(a),r=window.p5.Vector.add(this.origin,o);this.p.translate(r.x,r.y),this.p.rotate(this.rotation),this.p.strokeWeight(4),this.p.stroke(this.hue,100,100),this.p.fill(this.hue,100,100,.25),this.p.triangle(t,i,0,s,e,h),this.p.rotate(-this.rotation),this.p.translate(-r.x,-r.y)}}}var f=function(t){for(var i,s,e=t.length;0!==e;)s=Math.floor(Math.random()*e),i=t[e-=1],t[e]=t[s],t[s]=i;return t};class b extends m{constructor(t,i,s,e,h,n){super(t,i,s,e,h,n),this.hueSet=f([30,60,90,120,150,180,210,240,270,300,330,360]),this.hue1=this.hueSet[0],this.hue2=this.hueSet[1],this.hue3=this.hueSet[2],this.hue4=this.hueSet[3],this.stroke=t.color(0,0,100),this.endTime=this.startTime+this.lifeTime}drawTriangle(t,i){const s=t*this.p.cos(0),e=t*this.p.sin(0),h=t*this.p.cos(120),n=t*this.p.sin(120),a=t*this.p.cos(240),o=t*this.p.sin(240);this.p.fill(i,100,100,.5),this.p.triangle(s,e,h,n,a,o)}draw(){const t=this.p.millis();if(t<this.endTime){const i=this.p.min(1,(t-this.startTime)/(this.endTime-this.startTime)),s=window.p5.Vector.sub(this.destination,this.origin).mult(i),e=window.p5.Vector.add(this.origin,s);this.p.translate(e.x,e.y),this.p.rotate(this.rotation),this.p.strokeWeight(1),this.p.stroke(this.stroke),this.drawTriangle(this.width,this.hue1),this.drawTriangle(this.width/2,this.hue2),this.drawTriangle(this.width/4,this.hue3),this.p.rotate(-this.rotation),this.p.translate(-e.x,-e.y)}}}var T=()=>{const t=Object(e.useRef)(),i=t=>{t.canvas=null,t.canvasWidth=window.innerWidth,t.canvasHeight=window.innerHeight,t.audioLoaded=!1,t.player=null,t.PPQ=15360,t.bpm=88,t.loadMidi=()=>{r.Midi.fromUrl(p).then((function(i){console.log(i);const s=i.tracks[14].notes;t.scheduleCueSet(s,"executeCueSet1");const e=i.tracks[10].notes;t.scheduleCueSet(e,"executeCueSet2");const h=i.tracks[12].notes;t.scheduleCueSet(h,"executeCueSet3");const n=i.tracks[7].notes;t.scheduleCueSet(n,"executeCueSet4"),t.audioLoaded=!0,document.getElementById("loader").classList.add("loading--complete"),document.getElementById("play-icon").classList.remove("fade-out")}))},t.preload=()=>{t.song=t.loadSound(l,t.loadMidi),t.song.onended(t.logCredits)},t.scheduleCueSet=function(i,s){let e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],h=-1,n=1;for(let a=0;a<i.length;a++){const o=i[a],{ticks:r,time:d}=o;(r!==h||e)&&(o.currentCue=n,t.song.addCue(d,t[s],o),h=r,n++)}},t.setup=()=>{t.canvas=t.createCanvas(t.canvasWidth,t.canvasHeight),t.background(0),t.colorMode(t.HSB),t.rectMode(t.CENTER),t.angleMode(t.DEGREES),t.bgHue=t.random(0,360)},t.bgHue=0,t.bgOpacity=.9,t.draw=()=>{if(t.audioLoaded&&t.song.isPlaying()){t.background(t.bgHue,100,50,t.bgOpacity);for(let i=0;i<t.backgroundTriangles.length;i++){const s=t.backgroundTriangles[i];s.update(),s.draw()}for(let i=0;i<t.spinningTriangles1.length;i++){const s=t.spinningTriangles1[i];s.update(),s.draw()}for(let i=0;i<t.animatedGlyphs.length;i++){const s=t.animatedGlyphs[i];s.update(),s.draw()}}},t.spinningTriangles1=[],t.lowerHue=0,t.upperHue=360,t.addSpinningTriangle=function(i){let s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=t.random(t.width/24,t.width-t.width/24),h=t.random(t.width/24,t.height-t.width/24),n=t.random(t.width/32,t.width/24),a=t.map(i.midi,12,60,t.lowerHue,t.upperHue);const o=t.width/64;let r=!0,d=0;for(;r&&d<10;){r=!1;for(let i=0;i<t.spinningTriangles1.length;i++){const s=t.spinningTriangles1[i];if(t.dist(e,h,s.x,s.y)<1*n){r=!0;break}}if(r&&(n*=.9,e=t.random(t.width/24,t.width-t.width/24),h=t.random(t.width/24,t.height-t.width/24),n<o))break;d++}if(!r){const i=s?w:u;t.spinningTriangles1.push(new i(t,e,h,n,a))}},t.executeCueSet1=i=>{const s=t.getBarAndBeat(i.ticks);[1,3,4].includes(s.bar)&&1===s.beat&&1===s.semiquaver&&(t.bgHue=t.random(0,360),t.spinningTriangles1=[],t.lowerHue=t.random(0,120),t.upperHue=t.random(240,360)),i.currentCue<48&&t.addSpinningTriangle(i)},t.backgroundTriangles=[],t.backgroundTrianglesNextSize=void 0,t.executeCueSet2=i=>{let s=t.backgroundTrianglesNextSize?t.backgroundTrianglesNextSize:Math.min(t.width,t.height);if(t.backgroundTriangles.push(new g(t,t.width/2,t.height/2,s,t.random(t.random(0,60),t.random(300,360)))),i.currentCue>4)for(let e=1;e<8;e++)setTimeout((()=>{s*=.2,t.backgroundTriangles.push(new g(t,t.width/2,t.height/2,s,t.random(t.random(0,60),t.random(300,360))))}),200*e);console.log(i.currentCue),t.backgroundTrianglesNextSize=.9*s},t.executeCueSet3=i=>{const s=t.getBarAndBeat(i.ticks);[5,7,9,13,15,17].includes(s.bar)&&1===s.beat&&1===s.semiquaver&&(t.bgHue=t.random(0,360),t.spinningTriangles1=[],t.lowerHue=t.random(0,120),t.upperHue=t.random(240,360)),(i.currentCue<=64||i.currentCue>224)&&t.addSpinningTriangle(i,!0)},t.animatedGlyphs=[],t.executeCueSet4=i=>{const s=t.width/64,e=6e4*i.durationTicks/(t.PPQ*t.bpm),h=.68*e/128;for(let n=0;n<128;n++){const i=t.width/2,a=t.height/2,o=t.random(t.width/256,t.width/128);setTimeout((()=>{t.animatedGlyphs.push(new b(t,i,a,s,o,e))}),h*n)}},t.hasStarted=!1,t.getBarAndBeat=i=>{const s=t.PPQ,e=s/4,h=i/s;return{bar:Math.floor(h/4)+1,beat:Math.floor(h%4)+1,semiquaver:Math.floor(i%s/e)+1}},t.mousePressed=()=>{t.audioLoaded&&(t.song.isPlaying()?t.song.pause():(parseInt(t.song.currentTime())>=parseInt(t.song.buffer.duration)&&(t.reset(),"undefined"!==typeof window.dataLayer&&window.dataLayer.push({event:"play-animation",animation:{title:document.title,location:window.location.href,action:"replaying"}})),document.getElementById("play-icon").classList.add("fade-out"),t.canvas.addClass("fade-in"),t.song.play(),"undefined"===typeof window.dataLayer||t.hasStarted||(window.dataLayer.push({event:"play-animation",animation:{title:document.title,location:window.location.href,action:"start playing"}}),t.hasStarted=!1)))},t.creditsLogged=!1,t.logCredits=()=>{!t.creditsLogged&&parseInt(t.song.currentTime())>=parseInt(t.song.buffer.duration)&&(t.creditsLogged=!0,console.log("Music By: http://labcat.nz/","\n","Animation By: https://github.com/LABCAT/"),t.song.stop())},t.reset=()=>{},t.updateCanvasDimensions=()=>{t.canvasWidth=window.innerWidth,t.canvasHeight=window.innerHeight,t.canvas=t.resizeCanvas(t.canvasWidth,t.canvasHeight)},window.attachEvent?window.attachEvent("onresize",(function(){t.updateCanvasDimensions()})):window.addEventListener&&window.addEventListener("resize",(function(){t.updateCanvasDimensions()}),!0)};return Object(e.useEffect)((()=>{new o(i,t.current)}),[]),Object(d.jsx)("div",{ref:t,children:Object(d.jsx)(c,{})})};var v=function(){return Object(d.jsx)(T,{})};a.a.render(Object(d.jsx)(h.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.51e96c7b.chunk.js.map