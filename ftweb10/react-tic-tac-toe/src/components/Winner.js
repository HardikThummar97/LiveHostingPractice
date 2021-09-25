const Winner = (data) => {
  const l = data.length;
  let count = 0;
  for (var i = 0; i < l; i++) {
    for (var j = 0; j < l; j++) {
      if (data[i][j] !== "") {
        count++;
      }
      // Horizontal check:
      if (l - j >= 3) {
        if (
          data[i][j] !== "" &&
          data[i][j] === data[i][j + 1] &&
          data[i][j] === data[i][j + 2]
        ) {
          return data[i][j];
        }
      }
      // Vertical check:
      if (l - i >= 3) {
        if (
          data[i][j] !== "" &&
          data[i][j] === data[i + 1][j] &&
          data[i][j] === data[i + 2][j]
        ) {
          return data[i][j];
        }
      }
      // Diagonal down check:
      if (l - j >= 3 && l - i >= 3) {
        if (
          data[i][j] !== "" &&
          data[i][j] === data[i + 1][j + 1] &&
          data[i][j] === data[i + 2][j + 2]
        ) {
          return data[i][j];
        }
      }
      // Diagonal up check:
      if (l - j >= 3 && i >= 2) {
        if (
          data[i][j] !== "" &&
          data[i][j] === data[i - 1][j + 1] &&
          data[i][j] === data[i - 2][j + 2]
        ) {
          return data[i][j];
        }
      }
    }
  }
  if (count === 9) {
    return count;
  }
  return null;
};

export default Winner;
