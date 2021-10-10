module.exports = function kebabConvert(input) {
  return input
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-");
};
