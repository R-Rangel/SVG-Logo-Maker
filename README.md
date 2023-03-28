# SVG-Logo-Maker
     The task that I was given was to create a command prompt that prompts the user to make a svg logo. Using jest and inquire I was able to achieve it .

## User Story

```
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer.

```


## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```
## HOW TO USE
first type in 
```
node index.js
```
then you'll be prompted with the following: 

```
Enter up to three characters for the logo
Enter a color keyword or hexadecimal number for the text
Choose a shape
Enter a color keyword or hexadecimal number for the shape
```
then the svg should appear in your bash

## Screenshots