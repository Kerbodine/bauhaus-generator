const {
  size,
  randomBetween,
  randomColor,
  randomBool,
  randomOrientation,
} = require("./config");

const divisions = 2;

const square = () => {
  let level = randomBetween(1, divisions);
  let output = "";
  for (var i = 1; i < level + 1; i++) {
    output += `<rect width="${size - (i - 1) * (size / divisions)}" height="${
      size - (i - 1) * (size / divisions)
    }" x="${(i - 1) * (size / divisions / 2)}" y="${
      (i - 1) * (size / divisions / 2)
    }" style="fill:${randomColor()};" />`;
  }
  return output;
};

const vSquare = () => {
  let level = randomBetween(1, divisions);
  let output = "";
  for (var i = 1; i < level + 1; i++) {
    output += `<rect x="${(i - 1) * (size / divisions / 2)}" y="${
      (i - 1) * (size / divisions / 2)
    }" width="${size / 2 - (i - 1) * (size / divisions / 2)}" height="${
      size - (i - 1) * (size / divisions)
    }" style="fill:${randomColor()};" />
  <rect width="${size / 2 - (i - 1) * (size / divisions / 2)}" height="${
      size - (i - 1) * (size / divisions)
    }" x="${size / 2}" y="${
      (i - 1) * (size / divisions / 2)
    }" style="fill:${randomColor()};" />`;
  }
  return output;
};

const hSquare = () => {
  let level = randomBetween(1, divisions);
  let output = "";
  for (var i = 1; i < level + 1; i++) {
    output += `<rect x="${(i - 1) * (size / divisions / 2)}" y="${
      (i - 1) * (size / divisions / 2)
    }" width="${size - (i - 1) * (size / divisions)}" height="${
      size / 2 - (i - 1) * (size / divisions / 2)
    }" style="fill:${randomColor()};" />
  <rect width="${size - (i - 1) * (size / divisions)}" height="${
      size / 2 - (i - 1) * (size / divisions / 2)
    }" x="${(i - 1) * (size / divisions / 2)}" y="${
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
  let level = randomBetween(1, divisions);
  let output = "";
  for (var i = 1; i < level + 1; i++) {
    output += `<circle cx="${size / 2}" cy="${size / 2}" r="${
      size / 2 - (i - 1) * (size / divisions / 2)
    }" style="fill:${randomColor()};"/>`;
  }
  return output;
};

const diamond = () => {
  let level = randomBetween(1, divisions);
  let output = "";
  for (var i = 1; i < level + 1; i++) {
    output += `<polygon points="${size / 2},${
      (i - 1) * (size / divisions / 2)
    } ${(i - 1) * (size / divisions / 2)},${size / 2} ${size / 2},${
      size - (i - 1) * (size / divisions / 2)
    } ${size - (i - 1) * (size / divisions / 2)},${
      size / 2
    }" style="fill:${randomColor()};"/>`;
  }
  return output;
};

const quarterCircle = () => {
  let level = randomBetween(1, divisions);
  let offsetX = randomBetween(0, 1);
  let offsetY = randomBetween(0, 1);
  let output = "";
  for (var i = 1; i < level + 1; i++) {
    output += `<circle cx="${offsetX * size}" cy="${offsetY * size}" r="${
      size - (i - 1) * (size / divisions)
    }" style="fill:${randomColor()};"/>`;
  }
  return output;
};

const dots = () => {
  let offset = size / divisions;
  let radius = size / divisions / 4;
  let output;
  for (var i = 0; i < divisions; i++) {
    for (var j = 0; j < divisions; j++) {
      output += `<circle cx="${j * offset + offset / 2}" cy="${
        i * offset + offset / 2
      }" r="${radius}" style="fill:${randomColor()};" />`;
    }
  }
  return output;
};

const semiCircles = () => {
  let offset = size / 2;
  let radius = size / 2;
  let coordinates = [
    `cx="0" cy="${offset}"`,
    `cx="${size}" cy="${offset}"`,
    `cx="${offset}" cy="0"`,
    `cx="${offset}" cy="${size}"`,
  ];
  let output;
  for (var i = 0; i < coordinates.length; i++) {
    output += `<circle ${
      coordinates[i]
    } r="${radius}" style="fill:${randomColor()};" />`;
  }
  return output;
};

const hSemiCircles = () => {
  let offset = size / 2;
  let radius = size / 2;
  let coordinates = [`cx="0" cy="${offset}"`, `cx="${size}" cy="${offset}"`];
  let output;
  for (var i = 0; i < coordinates.length; i++) {
    output += `<circle ${
      coordinates[i]
    } r="${radius}" style="fill:${randomColor()};" />`;
  }
  return output;
};

const vSemiCircles = () => {
  let offset = size / 2;
  let radius = size / 2;
  let coordinates = [`cx="${offset}" cy="0"`, `cx="${offset}" cy="${size}"`];
  let output;
  for (var i = 0; i < coordinates.length; i++) {
    output += `<circle ${
      coordinates[i]
    } r="${radius}" style="fill:${randomColor()};" />`;
  }
  return output;
};

module.exports = {
  square,
  vSquare,
  hSquare,
  cornerSquare,
  circle,
  diamond,
  quarterCircle,
  dots,
  semiCircles,
  hSemiCircles,
  vSemiCircles,
};
