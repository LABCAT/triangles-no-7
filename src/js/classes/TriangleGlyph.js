import AnimatedGlyph from './AnimatedGlyph.js';
import ShuffleArray from '../functions/ShuffleArray.js';

export default class TriangleGlyph extends AnimatedGlyph {

    constructor(p5, x, y, width, startWidth, darkMode) {
        super(p5, x, y, width, startWidth);
        this.hueSet = ShuffleArray([30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360]);
        this.hue1 = this.hueSet[0];
        this.hue2 = this.hueSet[1];
        this.hue3 = this.hueSet[2];
        this.hue4 = this.hueSet[3];
        this.stroke = darkMode ? p5.color(0, 0, 0) : p5.color(0, 0, 100);
        this.endTime = this.startTime + this.lifeTime + 1000;
    }

    drawTriangle(size, hue) {
        // Calculate vertices using polar coordinates
        const x1 = size * this.p.cos(0);
        const y1 = size * this.p.sin(0);
        const x2 = size * this.p.cos(120);
        const y2 = size * this.p.sin(120);
        const x3 = size * this.p.cos(240);
        const y3 = size * this.p.sin(240);

        // Draw the triangle
        this.p.stroke(hue, 100, 70);
        this.p.fill(hue, 100, 100, 0.5);
        this.p.triangle(x1, y1, x2, y2, x3, y3);
    }

    draw() {
        const currentTime = this.p.millis();
        if(currentTime < this.endTime){
            const scale = this.p.min(1, (currentTime - this.startTime) / (this.endTime - this.startTime)),
                dist = window.p5.Vector.sub(this.destination, this.origin).mult(scale),
                pos = window.p5.Vector.add(this.origin, dist);

            this.p.translate(pos.x, pos.y);
            this.p.rotate(this.rotation);
            this.p.strokeWeight(1);
            
            this.p.stroke(this.stroke);
            this.drawTriangle(this.width, this.hue1);
            this.drawTriangle(this.width / 2, this.hue2);
            this.drawTriangle(this.width / 4, this.hue3);

            this.p.rotate(-this.rotation);
            this.p.translate(-pos.x, -pos.y);
        }
    }
}