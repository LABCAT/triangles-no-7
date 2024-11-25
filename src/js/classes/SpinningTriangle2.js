import SpinningTriangle from "./SpinningTriangle.js";

export default class SpinningTriangle2 extends SpinningTriangle {
    draw() {
        const x1 = this.width * this.p.cos(0);
        const y1 = this.width * this.p.sin(0);
        const x2 = this.width * this.p.cos(120); 
        const y2 = this.width * this.p.sin(120);
        const x3 = this.width * this.p.cos(240);
        const y3 = this.width * this.p.sin(240);

        const innerWidth = this.width / 2; // Half the size of the outer triangle
        const ix1 = innerWidth * this.p.cos(0);
        const iy1 = innerWidth * this.p.sin(0);
        const ix2 = innerWidth * this.p.cos(120);
        const iy2 = innerWidth * this.p.sin(120);
        const ix3 = innerWidth * this.p.cos(240);
        const iy3 = innerWidth * this.p.sin(240);

        this.p.translate(this.x, this.y);
        this.p.rotate(this.rotation);

        this.p.strokeWeight(2);
        // Draw the first triangle
        this.p.stroke(this.hue, 100, 70); 
        this.p.fill(this.hue, 100, 100, 0.25);
        this.p.triangle(x1, y1, x2, y2, x3, y3);

        this.p.stroke(this.hue, 100, 100);

        // Calculate the center of the triangle
        const cx = (x1 + x2 + x3) / 3;
        const cy = (y1 + y2 + y3) / 3;

        // First small triangle
        this.p.fill(this.hue, 100, 70, 0.5);
        this.p.triangle(
            x1, y1,
            (x1 + cx) / 2, (y1 + cy) / 2,
            (x2 + cx) / 2, (y2 + cy) / 2
        );

        // Second small triangle
        this.p.fill(this.hue, 100, 60, 0.5);
        this.p.triangle(
            x2, y2,
            (x2 + cx) / 2, (y2 + cy) / 2,
            (x3 + cx) / 2, (y3 + cy) / 2
        );

        // Third small triangle
        this.p.fill(this.hue, 100, 50, 0.5);
        this.p.triangle(
            x3, y3,
            (x3 + cx) / 2, (y3 + cy) / 2,
            (x1 + cx) / 2, (y1 + cy) / 2
        );

        // Draw the final triangle
        this.p.stroke(this.hue, 0, 80); 
        this.p.fill(this.hue, 100, 80, 0.5); 
        this.p.triangle(ix1, iy1, ix2, iy2, ix3, iy3);

        this.p.rotate(-this.rotation);
        this.p.translate(-this.x, -this.y);
    }
}
