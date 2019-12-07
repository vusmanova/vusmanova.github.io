var firstName = 'Visolakhon';
var lastName = 'Usmanova';
console.log(firstName);
//Output: Visolakhon
console.log(lastName);
//Output: Usmanova

var person = {
  firstName: 'Visolakhon',
  lastName: 'Usmanova',
  fullName: function () {
    'use strict';
    return this.firstName + ' ' + this.lastName;
  }
};
  //Output: Visolakhon Usmanova



divider('Person');
console.log('First Name: ' + person.firstName);
  console.log('Last Name: ' + person.lastName);
  console.log('Full Name: ' + person.fullName());

  var calculator = {
    operand01: -1,
    operand02: -1,
    add: function () {
      'use strict';
      return calculator.operand01 + calculator.operand02;
    },
    subtract: function () {
      'use strict';
      return calculator.operand01 - calculator.operand02;
    }
  };

  calculator.operand01 = person.firstName.length;
  calculator.operand02 = person.lastName.length;

  calculator.multiply = function (a, b) {
    return a * b;
  };

  function divider(title) {
    console.log('\n====================================');
console.log(title);
console.log('====================================\n');
}

divider('Calculator');

console.log('operand01 is length of firstName: ' + calculator.operand01);
console.log('operand02 is length of lastName: ' + calculator.operand02);
console.log('Add length of first and lastNames: ', calculator.add());
console.log('Subtract length of first and lastNames: ', calculator.subtract());
console.log(
  'Multiply length of first anhd lastNames: ',
  calculator.multiply(calculator.operand01, calculator.operand02)
);

divider('Fancy Display');

function display(title, func) {
  console.log(title + func());
}

display('Add: ', calculator.add);
display('Subtract: ', calculator.subtract);