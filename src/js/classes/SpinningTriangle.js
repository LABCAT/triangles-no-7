export default class SpinningTriangle {
    constructor(p5, x, y, width, hue) {
        this.p = p5;
        this.x = x;
        this.y = y;
        this.hue = hue;
        this.width = width / 4;
        this.maxWidth = width;
        this.rotation = 0;
        this.clockwise = Math.random() > 0.5;
    }

    update() {
        if (this.width < this.maxWidth) {
            this.width = this.width + (Math.random() * 0.5);
        }
        if(this.clockwise) {
            this.rotation++;
        }
        else {
            this.rotation--;
        }
    }

    draw() {
        const x1 = this.width * this.p.cos(0);
        const y1 = this.width * this.p.sin(0);
        const x2 = this.width * this.p.cos(120); 
        const y2 = this.width * this.p.sin(120);
        const x3 = this.width * this.p.cos(240);
        const y3 = this.width * this.p.sin(240);

        this.p.translate(this.x, this.y);
        this.p.rotate(this.rotation);

        // Draw the first triangle
        this.p.strokeWeight(2);
        this.p.stroke(this.hue, 0, 100);
        this.p.fill(this.hue, 100, 100, 0.25);
        this.p.triangle(x1, y1, x2, y2, x3, y3);

        this.p.scale(0.8);
        this.p.stroke(this.hue, 100, 100);
        this.p.fill(this.hue, 100, 25, 0.75);
        this.p.triangle(0, 0, x2, y2, x3, y3);
        this.p.fill(this.hue, 100, 50, 0.75);
        this.p.triangle(x1, y1, 0, 0, x3, y3);
        this.p.fill(this.hue, 100, 75, 0.75);
        this.p.triangle(x1, y1, x2, y2, 0, 0);

        this.p.scale(1.25);
        this.p.rotate(-this.rotation);
        this.p.translate(-this.x, -this.y);
    }
}
