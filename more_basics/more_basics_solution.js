// CPSC330 JavaScript: More basics

var str = "Hello, JS!"

// Make str uppercase and log it to the console
console.log(str + " in uppercase is " + str.toUpperCase());

// Replace 'Hello' with 'Goodbye' in str
console.log("Regex: " + str.replace('Hello', 'Goodbye'));

// Find the index of 'JS' in str and log it to the console
console.log("The index of JS in \"" + str + "\" is " + str.search('JS'));

var num = 42.42424242

// Log the value of num to 2 decimal places to the console
console.log(num + " to two decimal places is: " + num.toFixed(2));

var array = ["Chevy", "Toyota", "Honda", "Ford", "Mitsubishi"];

// Print the length of array
console.log("The length of the array is: " + array.length);

// Print the second element of array
console.log("The second element of the array is: " + array[1]);

// Print the entire array without using a loop
console.log("The entire array is: " + array);

// Print the entire array using a for/of loop
for (var element of array) {
    console.log(element);
}

// Sort and print the array
console.log("The sorted array is: " + array.sort());

// Print a 10 random numbers between 1 and 10
for (var i = 0; i < 10; i++) {
    console.log(Math.floor(Math.random() * 10) + 1);
}