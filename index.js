const util = require('util');
/**
 * Attempt #1
 * A function that takes in [a, b] and returns ['a', 'b', 'ab', 'ba']
 * Attempt #2
 * A function that takes in [a, b] and returns [['a'], ['b'], ['a', 'b'], ['b', 'a']]
 */
function combinations(cs) {
  const maxLength = cs.length;
  let result = [...cs.map(c => [c])];
  for (let currentLength = 2; currentLength <= maxLength; currentLength++) {
    for (let r = 0; r < result.length; r++) {
      let arr = [...result[r]];
      if (arr.length === currentLength) break;
      if (arr.length < currentLength - 1) continue;
      for (let cii = 0; cii < cs.length; cii++) {
        if (result[r].includes(cs[cii])) continue;
        arr.push(cs[cii])
        if (arr.length === currentLength) {
          result.push(arr);
          arr = [...result[r]];
        };
      }
    }
  }
  return result;
}

[
  ['a', 'b'],
  ['alfred', 'bob', 'chris'],
  // ['a', 'b', 'c', 'd'],
  // ['a', 'b', 'c', 'd', 'e'],
  // ['a', 'b', 'c', 'd', 'e', 'f'],
  // ['alf', 'bob', 'chris', 'devon', 'ellie', 'fred', 'greg'],
].forEach((vs) => {
  console.log(util.inspect(combinations(vs), { maxArrayLength: Infinity }));
  console.log('-------');
});

/* Make it work with any combination of strings, not just chars
[ [ 'a' ], [ 'b' ], [ 'a', 'b' ], [ 'b', 'a' ] ]
-------
[
  [ 'alfred' ],
  [ 'bob' ],
  [ 'chris' ],
  [ 'alfred', 'bob' ],
  [ 'alfred', 'chris' ],
  [ 'bob', 'alfred' ],
  [ 'bob', 'chris' ],
  [ 'chris', 'alfred' ],
  [ 'chris', 'bob' ],
  [ 'alfred', 'bob', 'chris' ],
  [ 'alfred', 'chris', 'bob' ],
  [ 'bob', 'alfred', 'chris' ],
  [ 'bob', 'chris', 'alfred' ],
  [ 'chris', 'alfred', 'bob' ],
  [ 'chris', 'bob', 'alfred' ]
]
-------
*/

/* Initial implemention
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