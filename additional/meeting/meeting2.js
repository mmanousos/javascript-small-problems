// refactor sort

function meeting(string) {
  // let names = string.split(';').map(parseName);
  // return names.sort(sortName);
  return sortNames(names, 1);
  // return names.sort(sortByLastNameFirst).map(formatName).join('');
}

function parseName(fullName) {
  return fullName.split(':').map((name) => name.toUpperCase());
}

function sortNames(names, index) {
  let a = 0;
  let b = a + 1;

  // console.log(names[a][1]);
  names.forEach(function() {
    if (index === -1) {
      return names;
    } else {
      if (names[a][index] > names[b][index]) {
        return [names[a][index], names[b][index]] = [names[b][index], names[a][index]];
        // return 1;
      } else if (a[index] < b[index]) {
        return -1;
      } else {
        index -= 1;
        return sortNames(names, index);
      }
    }
  });

  return names;
}

// function sortByFirstName(a, b) {
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

const names = [
  [ 'WILFRED', 'CORWILL' ],
  [ 'FRED', 'CORWILL' ],
  [ 'BARNEY', 'TORNBULL' ],
  [ 'BETTY', 'TORNBULL' ],
  [ 'BJON', 'TORNBULL' ],
  [ 'RAPHAEL', 'CORWILL' ],
  [ 'ALFRED', 'CORWILL' ]
];

// const friends = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
console.log(meeting(names));
