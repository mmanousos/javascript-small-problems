function solve(s) {
  if (s.length === 0) return 0;

  const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
  const matches = s.match(/([^aeiou]+)/g) || [];
  if (matches.length === 0) return 0;

  const matchValues = matches.map((substr) => {
    let substrValue = 0;
    for (let i = 0; i < substr.length; i += 1) {
      substrValue += ALPHA.indexOf(substr[i]) + 1; 
    }
    return substrValue;
  });

  let sortedValues = matchValues.sort((a, b) => a - b);
  return sortedValues[sortedValues.length - 1];
}

console.log(solve("zodiac")); // 26
console.log(solve("chruschtschov")); // 80
console.log(solve("khrushchev")); // 38
console.log(solve("strength")); // 57
console.log(solve("catchphrase")); // 73
console.log(solve("twelfthstreet")); // 103
console.log(solve("mischtschenkoana")); // 80