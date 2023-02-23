const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");

const shapes = [Triangle, Circle, Square].map((Shape) => new Shape());

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the logo:",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a color keyword or hexadecimal number for the text:",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["Triangle", "Circle", "Square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter a color keyword or hexadecimal number for the shape:",
    },
  ])
  .then((answers) => {
    const shape = shapes.find((s) => s.constructor.name === answers.shape);
    shape.setColor(answers.shapeColor);

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shape.render()}
        <text x="150" y="110" fill="${answers.textColor}" text-anchor="middle" font-size="80">${answers.text}</text>
      </svg>
    `;

    fs.writeFile("logo.svg", svg, (err) => {
        if (err) {
            console.error(err);
            } else {
            console.log("Logo successfully created!");
            }
            });
            })
            .catch((error) => {
            console.error(error);
            });
     
