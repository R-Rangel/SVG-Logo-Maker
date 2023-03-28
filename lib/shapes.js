class Circle {
  constructor() {
    this.radius = 50;
    this.color = 'black';
  }

  setRadius(radius) {
    this.radius = radius;
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
  }
}

class Triangle {
  constructor() {
    this.side = 50;
    this.color = 'black';
  }

  setSide(side) {
    this.side = side;
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    const x1 = 150 - (this.side / 2);
    const x2 = 150;
    const x3 = 150 + (this.side / 2);
    const y1 = 100 + ((this.side / 2) * Math.sqrt(3) / 3);
    const y2 = 100 - ((this.side / 2) * Math.sqrt(3) / 3);
    const y3 = y1;

    return `<polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="${this.color}" />`;
  }
}

class Square {
  constructor() {
    this.side = 50;
    this.color = 'black';
  }

  setSide(side) {
    this.side = side;
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    const x = 150 - (this.side / 2);
    const y = 100 - (this.side / 2);

    return `<rect x="${x}" y="${y}" width="${this.side}" height="${this.side}" fill="${this.color}" />`;
  }
}

export {
  Circle,
  Triangle,
  Square,
};
