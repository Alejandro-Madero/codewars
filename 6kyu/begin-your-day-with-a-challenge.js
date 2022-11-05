// https://www.codewars.com/kata/5873b2010565844b9100026d

// There are no explanations. You have to create the code that gives the following results in Python, Ruby, and Haskell:

// one_two_three(0) == [0, 0]
// one_two_three(1) == [1, 1]
// one_two_three(2) == [2, 11]
// one_two_three(3) == [3, 111]
// one_two_three(19) == [991, 1111111111111111111]
// And it should give the following results in Javascript, Scala, D, Go, and Rust:

// oneTwoThree(0) == ['0', '0']
// oneTwoThree(1) == ['1', '1']
// oneTwoThree(3) == ['3', '111']
// oneTwoThree(19) == ['991', '1111111111111111111']
// In C, the results are to be assigned to seperate pointers.

function oneTwoThree(n) {
  const sum =
    n <= 9
      ? String(n)
      : `${"9".repeat(Math.floor(n / 9))}${n % 9 !== 0 ? String(n % 9) : ""}`;

  return [sum, "1".repeat(n) || "0"];
}
