// LINK:

// https://www.codewars.com/kata/52ae2db783f47875d0000064/javascript

// DESCRIPTION:

// You start working for a fancy new startup hoping to revolutionize social networking! GASP! They had this great idea that users should be able to specify relevant keywords to their posts using an ingenious idea by prefixing those keywords with the pound sign (#). Your job is to extract those keywords so that they can be used later on for whatever purposes.

// Note:

// Pound signs alone do not count, for example: the string "#" would return an empty array.
// If a word is preceded by more than one hashtag, only the last hashtag counts (e.g. "##alot" would return ["alot"])
// Hashtags cannot be within the middle of a word (e.g. "in#line hashtag" returns an empty array)
// Hashtags must precede alphabetical characters (e.g. "#120398" or "#?" are invalid)
// Input: String of words, where some words may contain a hashtag.

// Output: Array of strings that were prefixed with the hashtag, but do not contain the hashtag.

// SOLUTION:

const isValidHash = function (word) {
  let parsedWord = word.slice(1);
  while (parsedWord[0] === "#") {
    parsedWord = parsedWord.slice(1);
  }
  if (parsedWord.includes("#") || !/[a-z]/i.test(parsedWord[0])) return false;
  return parsedWord;
};

const getHashtags = function (post) {
  const arr = post.split(" ").reduce((acc, el) => {
    if (!/[#]/.test(el[0])) return acc;
    const isValid = isValidHash(el);
    return isValid ? [...acc, isValid] : acc;
  }, []);

  return arr;
};
