/* Conditional Statements are used in conjunction with basic and advanced operators to determine how truthful a statement is. */

// Declare a variable
var num = 45;

/* Use a conditional statement to test 'num' to see if it is equal to 45. */
if (num === 45) {
	document.write('<br>The number IS 45');
} else {
	document.write('<br>The number is NOT 45.');
} 

/* In addition to checking numbers, conditions can also be used to check for strings. */

var myString = 'Sally';

if(myString === 'Sally') {
	document.write('<br>Welcome Home, Sally.');
} else {
	document.write('<br>Intruder Alert.');
}

/* You can evaluate two cariables against each other. */

var jenny = 19;
var henry = 20;

if (jenny === henry) {
	document.write('<br> Jenny and Henry are the same age');
} else {
	document.write('<br> Jenny and Henry are not the same age.');
} 

/* You can use operators such as && (and) or || (or) to check for the truthiness of the statement. */

var username = true;
var password = true;

if (username && password === true) {
	document.write('<br> Access granted.');
} else if (username === true && password === false) {
	document.write('<br>Your password is wrong.');
} else {
	document.write('<br> Access DENIED.');
}