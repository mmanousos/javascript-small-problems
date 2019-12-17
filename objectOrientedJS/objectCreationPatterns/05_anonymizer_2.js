let Account = function() {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;

  function generateDisplayName() {
    let values = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let name = '';
    for (let i = 0; i < 16; i += 1) {
      let idx = Math.floor(Math.random() * 62);
      name += values[idx];
    }
    return name;
  };
  function validPassword(password) {
    return password && userPassword === password;
  };

  return {
    init: function (email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = generateDisplayName();
    },
    reanonymize: function (password) {
      let valid = validPassword(password);
      if (valid) this.displayName = generateDisplayName();
      return valid ? true : 'Invalid Password';
    },
    resetPassword: function (oldPassword, newPassword) {
      let valid = validPassword(oldPassword);
      if (valid) userPassword = newPassword;
      return valid ? true : 'Invalid Password';
    },
    email: function (password) {
      return validPassword(password) ? userEmail : 'Invalid Password';
    },
    firstName: function (password) {
      return validPassword(password) ? userFirstName : 'Invalid Password';
    },
    lastName: function (password) {
      return validPassword(password) ? userLastName : 'Invalid Password';
    },
    displayName: function () {
      return this.displayName;
    },
  }
}();

// var fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
var fooBar = Object.create(Account)
fooBar.init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar);
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

var displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false (displayName before change != displayName after change)
