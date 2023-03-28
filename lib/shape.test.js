const { Circle } = require('./shapes');

describe('Circle', () => {
  it('should render a circle with default radius and color', () => {
    const circle = new Circle();
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="50" fill="black" />');
  });

  it('should set the radius of the circle', () => {
    const circle = new Circle();
    circle.setRadius(75);
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="75" fill="black" />');
  });

  it('should set the color of the circle', () => {
    const circle = new Circle();
    circle.setColor('red');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="50" fill="red" />');
  });
});
