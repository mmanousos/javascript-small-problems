// Catherine's solution

function formatFriends(string) {
  let names = string.split(';');

  names = names.map((fullName) => {
    return fullName.split(':').map((name) => {
      return name.toUpperCase();
    });
  });

  names.sort((a, b) => {
    if (a[1] < b[1]) {
      return -1;
    } else if (a[1] > b[1]) {
      return 1;
    } else {
      if (a[0] < b[0]) {
        return -1;
      } else if (a[0] > b[0]) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  return names.map((name) => {
    return `(${name[1]}, ${name[0]})`;
  }).join('');
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Catherine's refactored solution
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function meeting(string) {
  let names = string.split(';').map(parseName);
  return names.sort(sortByLastNameFirst).map(formatName).join('');
}

function parseName(fullName) {
  return fullName.split(':').map((name) => name.toUpperCase());
}

function sortByLastNameFirst(a, b) {
  if (a[1] > b[1]) {
    return 1;
  } else if (a[1] < b[1]) {
    return -1;
  } else {
    return sortByFirstName(a[0], b[0]);
  }
}

function sortByFirstName(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

function formatName(name) {
  return `(${name[1]}, ${name[0]})`;
}
