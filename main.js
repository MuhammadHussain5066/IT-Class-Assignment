//question 2
var FirstName = "Hussain";
console.log(FirstName);
//question3
var SecondName = "Ali";
console.log("Lowercase: ".concat(SecondName.toLowerCase()));
console.log("Uppercase: ".concat(SecondName.toUpperCase()));
console.log("Titlecase: ".concat(SecondName));
//question4
var quote = "A person who never made a mistake never tried anything new.";
var author = "Albert Einstein";
console.log("".concat(author, " once said, \"").concat(quote, "\""));
//question5
var famous_person = "Albert Einstein";
var quote2 = "A person who never made a mistake never tried anything new.";
var message = "".concat(famous_person, " once said, \"").concat(quote, "\"");
console.log(message);
//question6
//qusetion7
// Addition
var num1 = 3 + 5;
console.log(num1); // Output: 8
// Subtraction
var num2 = 10 - 2;
console.log(num2); // Output: 8
// Multiplication
var num3 = 4 * 2;
console.log(num3); // Output: 8
// Division
var num4 = 16 / 2;
console.log(num4); // Output: 8
//question8
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
//question9
var favNumber = 7;
var message2 = "My favorite number is ".concat(favNumber, ".");
console.log(message2);
//question 10
// let favNumber: number = 7;
// let message: string = `My favorite number is ${favNumber}.`;
// console.log(message);
// question 11
var names = ["Ali", "Ahmed", "Rafay", "Hamza"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//question 12
var friendName = ["Ali", "Ahmed", "Rafay", "Hamza"];
var greet = "Hello, ";
for (var i = 0; i < names.length; i++) {
    console.log(greet + friendName[i] + "!");
}
//question 13
var transport = ["bike", "car", "bus", "train"];
for (var i = 0; i < transport.length; i++) {
    console.log("I would like to own a " + transport[i] + ".");
}
//question14
var guest = ["Ali", "Ahmed", "Hamza"];
for (var i = 0; i < guest.length; i++) {
    console.log("Dear " + guest[i] + ",\n\nI would like to cordially invite you to dinner at my place. It would be an honor to have your company.\n\nBest regards,\n[Your Name]");
}
//question15
var guestList = ["Ali", "Ahmed", "Hamza"];
var notAvailable = "Ahmed";
guestList = guestList.filter(function (guest) { return guest !== notAvailable; }).concat("Majid");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\n\nYou're invited to dinner at my place. It would be great to have your company.\n\nBest regards,\n[Your Name]\n"));
});
//question 16
var guestList2 = ["Ali", "Ahmed", "Hamza"];
var unavailable = "Ahmed";
guestList = guestList.filter(function (guest) { return guest !== unavailable; });
guestList.unshift("Noman");
guestList.splice(Math.floor(guestList.length / 2), 0, "Majid");
guestList.push("Kashif");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\n\nYou're invited to dinner at my place. It would be great to have your company.\n\nBest regards,\n[Your Name]\n"));
});
console.log("Great news! We've found a bigger dinner table!");
//question 17
var guestList3 = ["Ali", "Ahmed", "Hamza", "Majid", "Kashif"];
var maxGuests2 = 2;
console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.");
while (guestList.length > maxGuests2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", we won't be able to invite you to dinner."));
}
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\n\nYou're invited to dinner at my place. It would be great to have your company.\n\nBest regards,\n[Your Name]\n"));
});
//question 18
var places = ["UK", "Portugal", "UAE", "Newzeland", "USA"];
console.log("Original Order:", places);
console.log("Alphabetical Order:", [places].sort());
console.log("Original Order:", places);
console.log("Reverse Alphabetical Order:", [places].sort().reverse());
console.log("Original Order:", places);
places.reverse();
console.log("Reversed Order:", places);
places.reverse();
console.log("Restored Original Order:", places);
places.sort();
console.log("Sorted Alphabetical Order:", places);
places.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted Reverse Alphabetical Order:", places);
//question 19
var guestList4 = ["Ali", "Ahmed", "Hamza", "Majid", "Kashif"];
var maxGuests = 2;
console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.");
while (guestList.length > maxGuests) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", we won't be able to invite you to dinner."));
}
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\n\nYou're still invited to dinner at my place. Looking forward to seeing you!\n\nBest regards,\n[Your Name]\n"));
});
console.log("Number of people invited to dinner: ".concat(guestList.length));
//question 20
var cities = [
    "Karachi",
    "Lahore",
    "Peshwar",
    "Islamabad",
    "Quetta",
];
console.log("List of Famous Cities of Pakistan:");
console.log(cities);
//question 21
var citiesPakistan = [
    { name: "Karachi", population: 15741000, province: "Sindh" },
    { name: "Lahore", population: 12188000, province: "Punjab" },
    { name: "Islamabad", population: 1095064, province: "Islamabad Capital Territory" },
    { name: "Multan", population: 1802305, province: "Punjab" },
    { name: "Peshawar", population: 1970042, province: "Khyber Pakhtunkhwa" },
    { name: "Quetta", population: 1001200, province: "Balochistan" }
];
console.log("List of Cities in Pakistan:");
console.log(citiesPakistan);
//question 22
var numbers = [10, 20, 30, 40, 50];
//wrong
console.log("Accessing an invalid index:", numbers[5]);
// error fixed
console.log("Accessing a valid index:", numbers[4]);
//question 23
var firstName = "Hussain";
console.log("Is firstName == 'Hussain'? I predict True.");
console.log(firstName == 'Hussain');
console.log("Is firstName === 'hussain'? I predict False.");
console.log(firstName === 'hussain');
console.log("Is firstName != 'Ali'? I predict True.");
console.log(firstName != 'Ali');
console.log("Is firstName !== 'Hussain'? I predict False.");
console.log(firstName !== 'Hussain');
console.log("Is firstName.toUpperCase() == 'HUSSAIN'? I predict True.");
console.log(firstName.toUpperCase() == 'HUSSAIN');
console.log("Is firstName.length == 7? I predict True.");
console.log(firstName.length == 7);
console.log("Is firstName.startsWith('H')? I predict True.");
console.log(firstName.startsWith('H'));
console.log("Is firstName.endsWith('n')? I predict True.");
console.log(firstName.endsWith('n'));
console.log("Is firstName.includes('uss')? I predict True.");
console.log(firstName.includes('uss'));
console.log("Is firstName == 'hussain'? I predict False.");
console.log(firstName == 'hussain');
//question 24
// with strings:
var firstName2 = "Hussain";
var lastName = "Muhammad";
console.log("Is firstName2 equal to lastName? I predict False.");
console.log(firstName == lastName);
console.log("Is firstName2 not equal to lastName? I predict True.");
console.log(firstName != lastName);
// lower case function:
var upperCaseName = "HUSSAIN";
console.log("Is upperCaseName in lowercase equal to firstName? I predict True.");
console.log(upperCaseName.toLowerCase() == firstName);
console.log("Is upperCaseName in lowercase not equal to firstName? I predict False.");
console.log(upperCaseName.toLowerCase() != firstName);
// Numerical tests:
var number1 = 13;
var number2 = 5;
console.log("Is number1 greater than number2? I predict True.");
console.log(number1 > number2);
console.log("Is number1 less than or equal to number2? I predict False.");
console.log(number1 <= number2);
console.log("Is number1 equal to number2? I predict False.");
console.log(number1 == number2);
console.log("Is number1 not equal to number2? I predict True.");
console.log(number1 != number2);
//  "and" and "or" operators:
var x = 7;
var y = 14;
var z = 21;
console.log("Is x less than y and y less than z? I predict True.");
console.log(x < y && y < z);
console.log("Is x less than y or y greater than z? I predict True.");
console.log(x < y || y > z);
// array
var namesof = ["Hussain", "Ali", "Ahmed", "Sara"];
console.log("Is 'Hussain' in the names array? I predict True.");
console.log(namesof.includes("Hussain"));
console.log("Is 'Khalid' in the names array? I predict False.");
console.log(namesof.includes("Majid"));
// not an array
console.log("Is 'Majid' not in the names array? I predict True.");
console.log(!names.includes("Majid"));
console.log("Is 'Ali' not in the names array? I predict False.");
console.log(!names.includes("Ali"));
//question 25
