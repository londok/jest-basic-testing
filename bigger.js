const isBigger = (a, b) => {
  let big = true;
  if (b > a) {
    big = false;
  }
  if (b === a) { big = false }
  return big;
}
module.exports = { isBigger };