fs = require("fs");

const { width, height, size, backgroundColor } = require("./config");
let shapes = require("./shapes");

shapes = Object.keys(shapes).map(function (key) {
  return shapes[key];
});

// Function to pick random shape
const randomShape = () => {
  return shapes[Math.floor(Math.random() * shapes.length)]();
};

// Main loop
let svg = "";
for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    svg += `
    <g transform="matrix(1,0,0,1,${j * size},${
      i * size
    })" style="clip-path: url(#square); ">
      ${randomShape()}
    </g>
  `;
  }
}

// Svg boilerplate
let output = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 ${width * size} ${
  height * size
}" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="square">
      <rect width="${size}" height="${size}" />
    </clipPath>
  </defs>
  <rect x="0" y="0" width="${width * size}" height="${
  height * size
}" style="fill:${backgroundColor}" />
  ${svg}
</svg>`;

// console.log(output);
// Writing results to file
fs.writeFile("output.svg", output, (err) => {
  if (err) {
    return console.log(err);
  } else {
    console.log("File saved successfully");
  }
});
