/*Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.*/
---------------------------------------------------------------------------
function addBinary(a,b) {
let sum = a + b;
let binary = '';

  while ( sum > 0 ) {
    binary = ( sum % 2 ) + binary;
    sum = Math.floor( sum / 2 );
  }

  return binary;
}
----------------------------------------------------------------------------
function addBinary(a, b) {
    return (a + b).toString(2)
}
//toString (2) - делает двоичное значение из числа
