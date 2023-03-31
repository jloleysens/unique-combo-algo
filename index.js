
/**
 * A function that takes in [a, b] and returns ['a', 'b', 'ab', 'ba']
 *
 * Attempt #1
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

/*
[ 'a', 'b', 'ab', 'ba' ]
-------
[
  'a',   'b',   'c',
  'ab',  'ac',  'ba',
  'bc',  'ca',  'cb',
  'abc', 'acb', 'bac',
  'bca', 'cab', 'cba'
]
-------
[
  'a',    'b',    'c',    'd',    'ab',   'ac',
  'ad',   'ba',   'bc',   'bd',   'ca',   'cb',
  'cd',   'da',   'db',   'dc',   'abc',  'abd',
  'acb',  'acd',  'adb',  'adc',  'bac',  'bad',
  'bca',  'bcd',  'bda',  'bdc',  'cab',  'cad',
  'cba',  'cbd',  'cda',  'cdb',  'dab',  'dac',
  'dba',  'dbc',  'dca',  'dcb',  'abcd', 'abdc',
  'acbd', 'acdb', 'adbc', 'adcb', 'bacd', 'badc',
  'bcad', 'bcda', 'bdac', 'bdca', 'cabd', 'cadb',
  'cbad', 'cbda', 'cdab', 'cdba', 'dabc', 'dacb',
  'dbac', 'dbca', 'dcab', 'dcba'
]
-------
*/