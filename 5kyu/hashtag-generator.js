// https://www.codewars.com/kata/52449b062fb80683ec000024

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

const generateHashtag = function (str) {
  if (!str) return false;

  const res = str
    .trim()
    .split(" ")
    .map((el) => {
      if (!el) return;
      res += `${el[0].toUpperCase()}${el.slice(1).toLowerCase()}`;
    })
    .join("");

  if (!res || res.length > 139) return false;

  return `#${res}`;
};
