
/**
 * A function that takes in [a, b] and returns ['a', 'b', 'ab', 'ba']
 */
function combinations(cs) {
  const maxLength = cs.length;
  let result = [...cs];
  for (let currentLength = 2; currentLength <= maxLength; currentLength++) {
    for (let r = 0; r < result.length; r++) {
      let string = result[r];
      if (string.length === currentLength) break;
      if (string.length < currentLength - 1) continue;
      for (let cii = 0; cii < cs.length; cii++) {
        if (result[r].includes(cs[cii])) continue;
        string += cs[cii]
        if (string.length === currentLength) {
          result.push(string);
          string = result[r];
        };
      }
    }
  }
  return result;
}

[
  ['a', 'b'],
  ['a', 'b', 'c'],
  ['a', 'b', 'c', 'd'],
].forEach((vs) => {
  console.log(combinations(vs));
  console.log('-------');
});