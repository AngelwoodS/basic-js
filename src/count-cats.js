const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (matrix.length > 0) {
  let ears = matrix.flatMap(entry =>
    entry.reduce((counter, ch) =>
        ch === "^^" ? counter + 1 : counter,
        0
    )
);
return ears.reduce((total, x) => total + x);
  } else return 0;
};
