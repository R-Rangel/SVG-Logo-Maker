import { writeFile } from "fs";
import { createPromptModule } from "inquirer";

import { Triangle, Circle, Square } from "./lib/shapes.js";

const shapes = [Triangle, Circle, Square].map((Shape) => new Shape());

class LogoMaker {
  constructor() {
    this.text = "";
    this.textColor = "";
    this.shape = null;
    this.shapeColor = "";
  }

  async promptUser() {
    const prompt = createPromptModule();
    const answers = await prompt([
      {
        type: "input",
        name: "text",
        message: "Enter up to three characters for the logo:",
      },
      {
        type: "input",
        name: "textColor",
        message:
          "Enter a color keyword or hexadecimal number for the text:",
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
    ]);
  
    this.text = answers.text;
    this.textColor = answers.textColor;
    this.shape = shapes.find((s) => s.constructor.name === answers.shape);
    this.shapeColor = answers.shapeColor;
  
    this.createLogo();
  }
  

  createLogo() {
    this.shape.setColor(this.shapeColor);

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${this.shape.render()}
        <text x="150" y="110" fill="${this.textColor}" text-anchor="middle" font-size="80">${this.text}</text>
      </svg>
    `;

    writeFile("logo.svg", svg, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Generated logo.svg");
      }
    });
  }
}

const logoMaker = new LogoMaker();
logoMaker.promptUser();
