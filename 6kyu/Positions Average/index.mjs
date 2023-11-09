export const posAverage = function (s) {
  const strArr = s
    .replaceAll(' ', '')
    .split(',')
    .map(str => str.split(''));

  let coincidences = 0;

  for (let i = 0; i < strArr.length; i++) {
    const str1 = strArr[i];

    for (let j = i + 1; j < strArr.length; j++) {
      const str2 = strArr[j];
      if (str2) {
        const matches = compareStrings(str1, str2);
        coincidences += matches;
      }
    }
  }

  return (
    (coincidences /
      (((strArr.length * (strArr.length - 1)) / 2) * strArr[0].length)) *
    100
  );
};

const compareStrings = function (str1, str2) {
  let coincidences = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) coincidences += 1;
  }

  return coincidences;
};
