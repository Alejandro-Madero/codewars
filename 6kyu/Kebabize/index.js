/*

LINK:
https://www.codewars.com/kata/57f8ff867a28db569e000c4a/javascript

DESCRIPTION: 

Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
Notes:

the returned string should only contain lowercase letters

*/

// SOLUTION:

const kebabize = function (str) {
  let kebabCase = "";
  let funcName = str;

  for (let i = 0; i < funcName.length; i++) {
    if (funcName[i].match(/[0-9]/)) {
      if (i === 0) {
        funcName = funcName.slice(1);
        i--;
        continue;
      }
      continue;
    }

    if (i === 0) {
      kebabCase += funcName[i].toLowerCase();
      continue;
    }

    funcName[i] === funcName[i].toUpperCase()
      ? (kebabCase += `-${funcName[i].toLowerCase()}`)
      : (kebabCase += funcName[i]);
  }

  return kebabCase;
};
