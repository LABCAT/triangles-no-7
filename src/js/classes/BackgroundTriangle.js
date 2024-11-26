export default class BackgroundTriangle {
    constructor(p5, x, y, width, hue) {
        this.p = p5;
        this.x = x;
        this.y = y;
        this.width = width / 32;
        this.hue = hue;
    }

    update() {
        this.width = this.width + (Math.random() * 8);
    }

    draw() {
        const x1 = this.width * this.p.cos(0);
        const y1 = this.width * this.p.sin(0);
        const x2 = this.width * this.p.cos(120); 
        const y2 = this.width * this.p.sin(120);
        const x3 = this.width * this.p.cos(240);
        const y3 = this.width * this.p.sin(240);

        this.p.translate(this.x, this.y);
        this.p.rotate(30);
        this.p.stroke(this.hue, 0, 100);
        this.p.fill(this.hue, 100, 100, 0.25);
        this.p.triangle(x1, y1, x2, y2, x3, y3);
        this.p.rotate(-30);
        this.p.translate(-this.x, -this.y);
    }
}