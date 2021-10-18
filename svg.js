const width = 24;
const height = 24;
const size = 20;

let svg = "";

// const colors = ["#F87171", "#FBBF24", "#34D399", "#60A5FA", "#A78BFA"];
// blue color palette
// const colors = [
//   "#EFF6FF",
//   "#DBEAFE",
//   "#BFDBFE",
//   "#93C5FD",
//   "#60A5FA",
//   "#3B82F6",
//   "#2563EB",
//   "#1D4ED8",
//   "#1E40AF",
//   "#1E3A8A",
// ];

// red color palette
// const colors = ["#FEF2F2", "#FEE2E2", "#FECACA", ""];

// yellow color palette
// const colors = [
//   "#FFFBEB",
//   "#FEF3C7",
//   "#FDE68A",
//   "#FCD34D",
//   "#FBBF24",
//   "#F59E0B",
//   "#D97706",
//   "#B45309",
//   "#92400E",
//   "#78350F",
// ];
const colors = ["#4F46E5", "#818CF8", "#6366F1", "#A5B4FC"];

const randomBetween = (min, max) =>
  min + Math.floor(Math.random() * (max - min + 1));

const generateRGB = () => {
  return [randomBetween(0, 255), randomBetween(0, 255), randomBetween(0, 255)];
};

const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const randomBool = () => {
  return Math.random() < 0.5;
};

const square = () => {
  let level = randomBetween(1, 4);
  let output = "";
  for (var i = 1; i < level + 1; i++) {
    output += `<rect width="${size - (i - 1) * (size / 4)}" height="${
      size - (i - 1) * (size / 4)
    }" x="${(i - 1) * (size / 8)}" y="${
      (i - 1) * (size / 8)
    }" style="fill:${randomColor()};" />`;
  }
  return output;
};

const vSquare = () => {
  let level = randomBetween(1, 4);
  let output = "";
  for (var i = 1; i < level + 1; i++) {
    output += `<rect x="${(i - 1) * (size / 8)}" y="${
      (i - 1) * (size / 8)
    }" width="${size / 2 - (i - 1) * (size / 8)}" height="${
      size - (i - 1) * (size / 4)
    }" style="fill:${randomColor()};" />
  <rect width="${size / 2 - (i - 1) * (size / 8)}" height="${
      size - (i - 1) * (size / 4)
    }" x="${size / 2}" y="${
      (i - 1) * (size / 8)
    }" style="fill:${randomColor()};" />`;
  }
  return output;
};

const hSquare = () => {
  let level = randomBetween(1, 4);
  let output = "";
  for (var i = 1; i < level + 1; i++) {
    output += `<rect x="${(i - 1) * (size / 8)}" y="${
      (i - 1) * (size / 8)
    }" width="${size - (i - 1) * (size / 4)}" height="${
      size / 2 - (i - 1) * (size / 8)
    }" style="fill:${randomColor()};" />
  <rect width="${size - (i - 1) * (size / 4)}" height="${
      size / 2 - (i - 1) * (size / 8)
    }" x="${(i - 1) * (size / 8)}" y="${
      size / 2
    }" style="fill:${randomColor()};" />`;
  }
  return output;
};

const cornerSquare = () => {
  let corners = [randomBool(), randomBool(), randomBool(), randomBool()];
  let shape = "";
  if (corners[0]) {
    shape += `<rect width="${size / 2}" height="${
      size / 2
    }" style="fill:${randomColor()};" />`;
  }
  if (corners[1]) {
    shape += `<rect width="${size / 2}" height="${size / 2}" x="${
      size / 2
    }" style="fill:${randomColor()};" />`;
  }
  if (corners[2]) {
    shape += `<rect width="${size / 2}" height="${size / 2}" y="${
      size / 2
    }" style="fill:${randomColor()};" />`;
  }
  if (corners[3]) {
    shape += `<rect width="${size / 2}" height="${size / 2}" x="${
      size / 2
    }" y="${size / 2}" style="fill:${randomColor()};" />`;
  }
  return shape;
};

const circle = () => {
  let level = randomBetween(1, 4);
  let output = "";
  for (var i = 1; i < level + 1; i++) {
    output += `<circle cx="${size / 2}" cy="${size / 2}" r="${
      size / 2 - (i - 1) * (size / 8)
    }" style="fill:${randomColor()};"/>`;
  }
  return output;
};

const diamond = () => {
  let level = randomBetween(1, 4);
  let output = "";
  for (var i = 1; i < level + 1; i++) {
    // return `<polygon points="${size / 2},0 0,${size / 2} ${
    //   size / 2
    // },${size} ${size},${size / 2}" style="fill:${randomColor()};"/>`;
    output += `<polygon points="${size / 2},${(i - 1) * (size / 8)} ${
      (i - 1) * (size / 8)
    },${size / 2} ${size / 2},${size - (i - 1) * (size / 8)} ${
      size - (i - 1) * (size / 8)
    },${size / 2}" style="fill:${randomColor()};"/>`;
  }
  return output;
};

const quarterCircle = () => {
  let level = randomBetween(1, 4);
  let offsetX = randomBetween(0, 1);
  let offsetY = randomBetween(0, 1);
  let output = "";
  for (var i = 1; i < level + 1; i++) {
    output += `<circle cx="${offsetX * size}" cy="${offsetY * size}" r="${
      size - (i - 1) * (size / 8)
    }" style="fill:${randomColor()};"/>`;
  }
  return output;
};

const dots = () => {
  let offset = size / 4;
  let radius = size / 8;
  let output = `
  <circle cx="${offset}" cy="${offset}" r="${radius}" style="fill:${randomColor()};" />
  <circle cx="${
    size - offset
  }" cy="${offset}" r="${radius}" style="fill:${randomColor()};" />
  <circle cx="${offset}" cy="${
    size - offset
  }" r="${radius}" style="fill:${randomColor()};" />
  <circle cx="${size - offset}" cy="${
    size - offset
  }" r="${radius}" style="fill:${randomColor()};" />`;
  return output;
};

const shapes = [
  square,
  vSquare,
  hSquare,
  cornerSquare,
  circle,
  diamond,
  quarterCircle,
  dots,
];

const randomShape = () => {
  return shapes[Math.floor(Math.random() * shapes.length)]();
};

// Main loop
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

// for (let i = 0; i < height; i++) {
//   for (let j = 0; j < width; j++) {
//     svg += `
//       <rect transform="matrix(1,0,0,1,${j * size},${
//       i * size
//     })" width="${size}" height="${size}" style="fill:${randomColor()};" />
//   `;
//   }
// }

// export svg template
svgTemplate = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 ${width * size} ${
  height * size
}" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="square">
      <rect width="${size}" height="${size}" />
    </clipPath>
  </defs>
  ${svg}
</svg>
`;

const pbcopy = (data) => {
  var proc = require("child_process").spawn("pbcopy");
  proc.stdin.write(data);
  proc.stdin.end();
};

console.log(svgTemplate);

var lines = svgTemplate.split("\n");
lines.splice(0, 1);
pbcopy(lines.join("\n"));
