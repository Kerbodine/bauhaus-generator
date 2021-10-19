const width = 24;
const height = 24;
const size = 20;

const backgroundColor = "#ffffff";

// Yellow
// const colors = ["#442b02", "#460909", "#ba6711", "#e69138", "#ffd966"];

// Watermelon
// const colors = ["#ff6c62", "#eeeeee", "#b0c465", "#8aa791", "#0aa683"];

// Pastel watermelon

const colors = ["#a8e6cf", "#deedc1", "#ffd3b6", "#ffaaa5", "#ff8b94"];

// Blue
// const colors = ["#2a4d69", "#4b86b4", "#adcbe3", "#e7eff6", "#63ace5"];

// Lilac
// const colors = ["#e6d7ff", "#e7d1ff", "#e1c4ff", "#d8b9ff", "#d2afff"];

// Peach
// const colors = ["#f6a192", "#f6b092", "#f6c492", "#f6cf92", "#f6d992"];

// Green
// const colors = ["#52bf90", "#49ab81", "#419873", "#398564", "#317256"];

// generate a number between specified range
const randomBetween = (min, max) =>
  min + Math.floor(Math.random() * (max - min + 1));

// pick a random hex color from colors array
const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

// generate a random boolean value
const randomBool = () => {
  return Math.random() < 0.5;
};

module.exports = {
  width,
  height,
  size,
  colors,
  backgroundColor,
  randomBetween,
  randomColor,
  randomBool,
};
