// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

const reverse = function (array) {
  return Array.from(
    { length: array.length },
    (el, i) => array[array.length - i - 1]
  );
};
