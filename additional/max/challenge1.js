function rleDecode(string) {
  let results = '';
  let numberString = '';

  for (let i = 0; i < string.length; i += 1) {
    if (string[i].match(/[0-9]/)) {
      numberString = numberString + string[i];
    } else if (string[i].match(/[A-Z]/)) {
      let quantity = Number(numberString);
      if (quantity === 0) quantity = 1;
      results = results + (string[i].repeat(quantity));
      numberString = '';
    }
  }

  return results;
}

console.log(rleDecode("12WB12W3B24WB") === "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB");
console.log(rleDecode("A5B")); // "ABBBBB"
console.log(rleDecode("2Z4Y")); // "ZZYYYY"