// Task:
// Complete the pattern using the following set of characters: ■, , ◥, ◤, ◣, ◢
// In this kata, we need draw a Heart.
// Rules:
// parameter n The width of heart, an even number, n>=6, the heart's height increases with n, look at example.
// return a string, ■ ◥◤◣◢ represents the heart, and Full width space character pad at heart's left and right side.
// Examples:
// (Please do not mind the black stripes, this is codewars description display effect, not perfect)

// Examples:
// (Please do not mind the black stripes, this is codewars description display effect, not perfect)

// draw(6)
//   ◢■◣◢■◣
//   ■■■■■■
//   ◥■■■■◤
//   ◥■■◤
//    ◥◤

const draw = function (n) {
  const sqLines = Math.floor(n / 6);
  const totalLines = n / 2 - 1 + sqLines + 2;

  const sq = "■";
  const tl = "◣";
  const tr = "◢";
  const le = "◥";
  const re = "◤";
  const sp = " ";

  let squares = n;
  let heart = "";

  for (let i = 0; i < totalLines; i++) {
    if (i === 0)
      heart += `${tr}${sq.repeat((n - 4) / 2)}${tl}${tr}${sq.repeat(
        (n - 4) / 2
      )}${tl}\n`;
    if (i > 0 && i <= sqLines) heart += `${sq.repeat(n)}\n`;

    if (i > sqLines) {
      let line = `${le}${sq.repeat(squares - 2)}${re}`;

      line = line
        .padStart((n - line.length) / 2 + line.length, sp)
        .padEnd(n, sp);

      heart += i + 1 === totalLines ? `${line}` : `${line}\n`;

      squares -= 2;
    }
  }

  return heart;
};
