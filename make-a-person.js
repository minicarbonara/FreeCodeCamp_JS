var Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly

  let firstName = firstAndLast.split(" ")[0];
  let lastName = firstAndLast.split(" ")[1];

  this.getFullName = function () {
    return (firstName + " " + lastName);
  };

  this.getFirstName = function () {
    return firstName;
  };
  this.getLastName = function () {
    return lastName;
  };

  this.setFirstName = function (newFirst) {
    firstName = newFirst;
  };
  this.setLastName = function (newLast) {
    lastName = newLast;
  };
  this.setFullName = function (firstAndLast) {
    firstName = firstAndLast.split(" ")[0];
    lastName = firstAndLast.split(" ")[1];
  };
  //return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
