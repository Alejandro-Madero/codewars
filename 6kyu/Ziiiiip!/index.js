/*

LINK:
https://www.codewars.com/kata/5298ad7cd0f550269500051b

DESCRIPTION:

Let's implement the zipObject function that enables such results

zipObject(['fred', 'barney'], [30, 40])
=> { 'fred': 30, 'barney': 40 }

zipObject([['fred', 30], ['barney', 40]])
=> { 'fred': 30, 'barney': 40 }
The zipObject creates an object composed from arrays of keys and values. It is provided with either a single two dimensional array, i.e. [[key1, value1], [key2, value2]] or with two arrays, one of keys and one of corresponding values.

If only keys are given, then set the values to undefined.

zipObject(['fred', 'barney'])
{ fred: undefined, barney: undefined }
If neither keys nor values are specified, then return {}

zipObject()
{}

*/

// SOLUTION:

const zipObject = function (keys = [], values = []) {
  const isSingleArray = !values.length;

  return keys.reduce((obj, key, i) => {
    if (isSingleArray) obj[key[0]] = key[1];
    if (!isSingleArray) obj[key] = values[i];
    return obj;
  }, {});
};
