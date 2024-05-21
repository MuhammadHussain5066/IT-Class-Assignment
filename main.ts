//question 2
let FirstName:string ="Hussain";
console.log(FirstName);

//question3

let SecondName:string= "Ali"
console.log(`Lowercase: ${SecondName.toLowerCase()}`);
console.log(`Uppercase: ${SecondName.toUpperCase()}`);
console.log(`Titlecase: ${SecondName}`);

//question4

const quote: string = "A person who never made a mistake never tried anything new.";
const author: string = "Albert Einstein";
console.log(`${author} once said, "${quote}"`);

//question5

let famous_person: string = "Albert Einstein";
const quote2: string = "A person who never made a mistake never tried anything new.";
const message: string = `${famous_person} once said, "${quote}"`;
console.log(message);

//question6




//qusetion7
// Addition
let num1 = 3 + 5;
console.log(num1); // Output: 8

// Subtraction
let num2 = 10 - 2;
console.log(num2); // Output: 8

// Multiplication
let num3= 4 * 2;
console.log(num3); // Output: 8

// Division
let num4= 16 / 2;
console.log(num4); // Output: 8

//question8
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);

//question9
let favNumber: number = 7;
let message2: string = `My favorite number is ${favNumber}.`;
console.log(message2);

//question 10
// let favNumber: number = 7;
// let message: string = `My favorite number is ${favNumber}.`;
// console.log(message);

// question 11
let names= ["Ali", "Ahmed", "Rafay", "Hamza"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//question 12
let friendName= ["Ali", "Ahmed", "Rafay", "Hamza"];
let greet= "Hello, ";
for (let i = 0; i < names.length; i++) {
    console.log(greet + friendName[i] + "!");
}

//question 13
let transport= ["bike", "car", "bus", "train"];
for (let i = 0; i < transport.length; i++) {
    console.log("I would like to own a " + transport[i] + ".");
}


//question14
let guest: string[] = ["Ali", "Ahmed", "Hamza"];
for (let i = 0; i < guest.length; i++) {
    console.log("Dear " + guest[i] + ",\n\nI would like to cordially invite you to dinner at my place. It would be an honor to have your company.\n\nBest regards,\n[Your Name]");
}


//question15
let guestList= ["Ali", "Ahmed", "Hamza"];
let notAvailable = "Ahmed";
guestList = guestList.filter(guest => guest !== notAvailable).concat("Majid");
guestList.forEach(guest => {
    console.log(`Dear ${guest},\n\nYou're invited to dinner at my place. It would be great to have your company.\n\nBest regards,\n[Your Name]\n`);
});


//question 16
let guestList2= ["Ali", "Ahmed", "Hamza"];
const unavailable= "Ahmed";

guestList = guestList.filter(guest => guest !== unavailable);
guestList.unshift("Noman"); 
guestList.splice(Math.floor(guestList.length / 2), 0, "Majid"); 
guestList.push("Kashif");
guestList.forEach(guest => {
    console.log(`Dear ${guest},\n\nYou're invited to dinner at my place. It would be great to have your company.\n\nBest regards,\n[Your Name]\n`);
});
console.log("Great news! We've found a bigger dinner table!");


//question 17
let guestList3= ["Ali", "Ahmed", "Hamza", "Majid", "Kashif"];
const maxGuests2 = 2;

console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.");

while (guestList.length > maxGuests2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, we won't be able to invite you to dinner.`);
}

guestList.forEach(guest => {
    console.log(`Dear ${guest},\n\nYou're invited to dinner at my place. It would be great to have your company.\n\nBest regards,\n[Your Name]\n`);
});


//question 18
let places: string[] = ["UK", "Portugal", "UAE", "Newzeland", "USA"];
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


places.sort((a, b) => b.localeCompare(a));
console.log("Sorted Reverse Alphabetical Order:", places);


//question 19
let guestList4: string[] = ["Ali", "Ahmed", "Hamza", "Majid", "Kashif"];
const maxGuests: number = 2;

console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.");


while (guestList.length > maxGuests) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, we won't be able to invite you to dinner.`);
}


guestList.forEach(guest => {
    console.log(`Dear ${guest},\n\nYou're still invited to dinner at my place. Looking forward to seeing you!\n\nBest regards,\n[Your Name]\n`);
});


console.log(`Number of people invited to dinner: ${guestList.length}`);


//question 20
let cities= [
    "Karachi",
    "Lahore",
    "Peshwar",
    "Islamabad",
    "Quetta",
    
];

console.log("List of Famous Cities of Pakistan:");
console.log(cities);


//question 21
let citiesPakistan: { name, population, province}[] = [
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
const numbers: number[] = [10, 20, 30, 40, 50];

//wrong
console.log("Accessing an invalid index:", numbers[5]);

// error fixed
console.log("Accessing a valid index:", numbers[4]); 


//question 23
let firstName = "Hussain";

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
let firstName2= "Hussain";
let lastName = "Muhammad";

console.log("Is firstName2 equal to lastName? I predict False.");
console.log(firstName == lastName);

console.log("Is firstName2 not equal to lastName? I predict True.");
console.log(firstName != lastName);

// lower case function:
let upperCaseName: string = "HUSSAIN";

console.log("Is upperCaseName in lowercase equal to firstName? I predict True.");
console.log(upperCaseName.toLowerCase() == firstName);

console.log("Is upperCaseName in lowercase not equal to firstName? I predict False.");
console.log(upperCaseName.toLowerCase() != firstName);

// Numerical tests:
let number1: number = 13;
let number2: number = 5;

console.log("Is number1 greater than number2? I predict True.");
console.log(number1 > number2);

console.log("Is number1 less than or equal to number2? I predict False.");
console.log(number1 <= number2);

console.log("Is number1 equal to number2? I predict False.");
console.log(number1 == number2);

console.log("Is number1 not equal to number2? I predict True.");
console.log(number1 != number2);

//  "and" and "or" operators:
let x: number = 7;
let y: number = 14;
let z: number = 21;

console.log("Is x less than y and y less than z? I predict True.");
console.log(x < y && y < z);

console.log("Is x less than y or y greater than z? I predict True.");
console.log(x < y || y > z);

// array
let namesof: string[] = ["Hussain", "Ali", "Ahmed", "Sara"];

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
//"pass"
let alien_color: 'green' | 'yellow' | 'red' = 'green';
if (alien_color === 'green') {
    console.log("You just earned 5 points!");
}

// "failed"
let alien_color2: 'green' | 'yellow' | 'red' = 'red'; // The color is not green

// Check if the alien's color is green
if (alien_color === 'green') {
    console.log("You just earned 5 points!");
}

// Question 26
// With If:
let alien_color3: 'green' | 'yellow' | 'red' = 'green';
if (alien_color === 'green') {
    console.log("You just earned 5 points");
} else {
    console.log("You just earned no points.");
}

// With else
let alien_color4: 'green' | 'yellow' | 'red' = 'red';
if (alien_color === 'green') {
    console.log("You just earned 5 points");
} else {
    console.log("You just earned no points.");
}


// Question 27
// For Green:
let alien_color5: 'green' | 'yellow' | 'red' = 'green';
if (alien_color === 'green') {
    console.log("You earned 50 points.");
} else if (alien_color === 'yellow') {
    console.log("You earned 100 points.");
} else if (alien_color === 'red') {
    console.log("You earned 150 points.");
}

// For Yellow:
let alien_color6: 'green' | 'yellow' | 'red' = 'yellow';
if (alien_color === 'green') {
    console.log("You earned 50 points.");
} else if (alien_color === 'yellow') {
    console.log("You earned 100 points.");
} else if (alien_color === 'red') {
    console.log("You earned 150 points.");
}

// For Red:
// Define the alien's color
let alien_color7: 'green' | 'yellow' | 'red' = 'red';
if (alien_color === 'green') {
    console.log("You earned 50 points.");
} else if (alien_color === 'yellow') {
    console.log("You earned 100 points.");
} else if (alien_color === 'red') {
    console.log("You earned 150 points.");
}


// Question 28
let age: number = 20;
if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}


// Question 29
let favorite_fruits: string[] = ['apple', 'banana', 'mango'];
if (favorite_fruits.includes('apple')) {
    console.log("I really like apples!");
}

if (favorite_fruits.includes('banana')) {
    console.log("I really like bananas!");
}

if (favorite_fruits.includes('mango')) {
    console.log("I really like mangoes!");
}

if (favorite_fruits.includes('orange')) {
    console.log("I really like oranges!");
}

if (favorite_fruits.includes('Peach')) {
    console.log("I really like peach!");
}

// Question 30
let personnames: string[] = ['Mohammad', 'Ali', 'Hussain', 'Kashif', 'Hamza'];
for (let username of personnames) {
    if (username === 'Hussain') {
        console.log("Hello Hussain, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}


// Question 31
// Define the person's age
let age2: number = 20;

let personNames: string[] = ['Hussain', 'Hamza', 'Ali'];

if (personNames.length === 0) {
    console.log("We need to find some users!");
} else {
    if (age < 2) {
        console.log("The person is a baby.");
    } else if (age >= 2 && age < 4) {
        console.log("The person is a toddler.");
    } else if (age >= 4 && age < 13) {
        console.log("The person is a kid.");
    } else if (age >= 13 && age < 20) {
        console.log("The person is a teenager.");
    } else if (age >= 20 && age < 65) {
        console.log("The person is an adult.");
    } else {
        console.log("The person is an elder.");
    }
}


// Question 32
let current_users: string[] = ['Ali', 'Hussain', 'Hamza', 'Kashif', 'Noman'];

let new_users: string[] = ['Ahmed', 'Usman', 'Noman', 'Javed', 'Faisal'];

for (let new_user of new_users) {

    let lowercase_new_user = new_user.toLowerCase();
    let exists = false;

    for (let current_user of current_users) {
        if (current_user.toLowerCase() === lowercase_new_user) {
            exists = true;
            break;
        }
    }

    if (exists) {
        console.log(`Sorry, ${new_user} is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! ${new_user} is available.`);
    }
}


// Question 33
let numbers2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];


for (let number of numbers2) {
    
    let ordinal_ending: string;
    if (number === 1) {
        ordinal_ending = "st";
    } else if (number === 2) {
        ordinal_ending = "nd";
    } else if (number === 3) {
        ordinal_ending = "rd";
    } else {
        ordinal_ending = "th";
    }
    
    
    console.log(`${number}${ordinal_ending}`);
}


// Question 34
let favorite_pizzas: string[] = ['Pepperoni', 'Chicken Tika', 'Cheeze'];

for (let pizza of favorite_pizzas) {
    console.log(pizza);
}

console.log(); 

for (let pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log(); 

console.log("I really love pizza!");


// Question 35
let animals: string[] = ['Dog', 'Wolf', 'Lion'];

for (let animal of animals) {
    console.log(animal);
}

console.log(); 


for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log();

console.log("All of the above mentioned animals are dangerous");

// Question 36
function make_shirt(size: string, message: string) {
    console.log(`The shirt size is ${size} and it will have the message: "${message}" printed on it.`);
}

make_shirt("Medium", "The size is 30");
make_shirt("Large", "The size is 40");
make_shirt("Small", "The size is 20");


// Question 37
function make_shirt2(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size} and it will have the message: "${message}" printed on it.`);
}

make_shirt2(); 
make_shirt2("Medium");
make_shirt2("Small", "Show your coding skills");


// Question 38
function cities_pakistan(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

cities_pakistan("Karachi"); 
cities_pakistan("Lahore"); 
cities_pakistan("Colombo", "Srilanka");


// Question 39
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

const city1 = city_country("Lahore", "Pakistan");
const city2 = city_country("London", "UK");
const city3 = city_country("Dhaka", "Bangladesh");

console.log(city1);
console.log(city2);
console.log(city3);


// Question 40
type Album = {
    artist: string;
    title: string;
    tracks?: number;
};

function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist,
        title,
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

const album1 = make_album("Artist One", "Album One");
const album2 = make_album("Artist Two", "Album Two");
const album3 = make_album("Artist Three", "Album Three");
const album4 = make_album("Artist Four", "Album Four", 10);


console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);


// Question 41
function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magicians: string[] = ['David Copperfield', 'Penn Jillette', 'Teller', 'Dynamo', 'David Blaine'];

show_magicians(magicians);


// Question 42

function show_magicians2(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
    return magicians;
}

const magicians2: string[] = ['Harry Houdini', 'David Copperfield', 'Derren Brown'];

const greatMagicians = make_great([...magicians]);

show_magicians(greatMagicians);


// Question 43
function make_album2(artist: string, title: string, tracks?: number): object {
    return { artist, title, tracks };
  }
  
  
  const albums1 = make_album("The Beatles", "Abbey Road");
  const albums2 = make_album("Pink Floyd", "Dark Side of the Moon", 9);
  const albums3 = make_album("Radiohead", "OK Computer");
  
  console.log(albums1);
  console.log(albums2);
  console.log(albums3);
  
  
  function Make_great(magicians: string[]): string[] {
    const greatMagicians = magicians.slice();
  
    greatMagicians.forEach((magician, index) => (greatMagicians[index] = `${magician} the Great`));
  
    return greatMagicians;
  }
  
  const originalMagicians = ["David Copperfield", "Criss Angel", "Dynamo"];
  const greatMagicians2 = make_great(originalMagicians);
  
  
  console.log("Original Magicians:");
  console.log(originalMagicians);
  
  console.log("\nGreat Magicians:");
  console.log(greatMagicians);
  
// Question 44
function makeSandwich(...items: string[]): void {
    console.log("Let's craft your masterpiece:");

    if (items.length === 0) {
        console.log("- Hmm, just bread? looks good");
    } else {
        items.forEach((item, index) => {
            console.log(`- ${item}`);
        });
    }

    console.log("Your order is ready for enjoyment!");
}

makeSandwich("Roast beef", "Cheddar cheese", "Pickles", "Mustard");
makeSandwich("Tuna salad", "Lettuce");
makeSandwich();


// question 45
function carDetails(manufacturer: string, model: string, ...extras: [string, any][]): object {
    const carInfo: {[key: string]: any} = {
        brand: manufacturer,
        model: model
    };

    extras.forEach(([key, value]) => {
        carInfo[key] = value;
    });

    return carInfo;
}

const myCar = carDetails("Honda", "Civic", ["color", "red"], ["year", 2023]);
console.log("Here are the details of your car:");
console.log(myCar);
























