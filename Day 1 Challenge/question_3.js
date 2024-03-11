"use strict";
/*
Question 3: Name Cases: Store a person’s name in a variable, and then print
that person’s name in lowercase, uppercase, and titlecase.
*/
/*
Explain & TIP:Save a name in a variable. Show it in all small letters, ALL BIG LETTERS,
and First Letter Big for each word. This helps learn how to change text style.
*/
let firstName = 'muhammad';
let lastName = 'tayyab';
let fullName = '' + firstName + ' ' + lastName;
let response_1 = fullName.toLowerCase();
let response_2 = fullName.toUpperCase();
let response_3 = fullName.charAt(0).toUpperCase() + fullName.slice(1);
console.log(response_1);
console.log(response_2);
console.log(response_3);
