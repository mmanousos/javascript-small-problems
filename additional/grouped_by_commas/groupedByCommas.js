
function groupByCommas(n) {
  if (n < 1000) return String(n);

  let reversedNumber = String(n).split('').reverse('');
  let groups = [];
  let group = '';

  reversedNumber.forEach((digit, index) => {
    group = digit + group;
    if (group.length === 3 || index === reversedNumber.length - 1) {
      groups.unshift(group);
      group = '';
    }  
  });
 
  return groups.join(','); 
}


console.log(groupByCommas(1)); //-> "1"
console.log(groupByCommas(10)); //-> "10"
console.log(groupByCommas(100)); //-> "100"
console.log(groupByCommas(1000)); // -> "1,000"
console.log(groupByCommas(10000)); //-> "10,000"
console.log(groupByCommas(100000)); //-> "100,000"
console.log(groupByCommas(1000000)); //-> "1,000,000"
console.log(groupByCommas(35235235));// -> "35,235,235"