// Question 1 - How many vowels?
// Write code that counts the number of vowels in a string.
// +1 bonus points if you ask for the string from the user

//var sentence = "How many vowels do you think are in this one?";

function countVowels(str) {
    /// Define vowels (lowercase and uppercase)
    const vowels = 'aeiouAEIOU';
    
    /// have vowel count begin at the zero position of the string
    let vowelCount = 0;

    /// using a loop, check each character to see if it's a vowel
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vowelCount++;
        }
    }
    
    /// Return vowel count
    return vowelCount;
}

// Test the function
const inputString = "How many vowels do you think are in this one?";
const result = countVowels(inputString);
console.log("Number of vowels:", result);

///the addition code need to ask the user to provide the string
/// Prompt the user to enter a string
const inputString = prompt("Please enter a string:");

// Call the function with user-provided string and display vowel count
const result = countVowels(inputString);
console.log("Number of vowels:", result);


// Question 2 - Odd Addition
// You'll be given three arrays containing two numbers each. 
// Write a script that checks if the numbers are odd or even.
// If they are odd, multiple them and return or print the results.
// If they are even, add them and return or print the results.
// For example, [3, 5] would return 15; but [3, 6] would result in 9

///creating three arrays with two numbers
const array1 = [3, 5];  
const array2 = [3, 9];  
const array3 = [2, 6];  

///function that checks whether both of the numbers in the array are odd or even
function checkOddEven(arr) {
    const num1 = arr[0];
    const num2 = arr[1];
    
    /// if statement to check whether both #s are ODD what what to do if they ARE
    if (num1 % 2 !== 0 && num2 % 2 !== 0) {
        return num1 * num2;  /// carry out the multiplication of both ODD #s and return value
    }
    /// else if statemnt to check whether both #s are EVEN and what to do if they ARE
    else if (num1 % 2 === 0 && num2 % 2 === 0) {
        return num1 + num2;  /// carry out addition of both EVEN #s and return value
    }

/// For each array, call the fuction and display results
console.log(checkOddEven(array1));  /// 15
console.log(checkOddEven(array2));  /// 27
console.log(checkOddEven(array3));  /// 8

// Question 3 - Twenty One
// You'll receive three arrays with two numbers again.
// If the two numbers add up to 21, return True
// If they don't, return False unless they are identical
// If they are identical, return "Split"

// Your solution goes here
/// Create three arrays w/ 2 #s each
const array1 = [9, 12];  
const array2 = [15, 15];    
const array3 = [3, 6];    

function checkNumbers(arr) {
    const num1 = arr[0];
    const num2 = arr[1];

    /// if the #s add up to 21, return true
    if (num1 + num2 === 21) {
        return true;
    }
    /// if the #s are the same, return "Split"
    else if (num1 === num2) {
        return "Split";
    }
    /// if the #s are NOT the same and do not add up to equal 21, return false
    else {
        return false;
    }
}

/// Call the function for each array and print the results
console.log(checkNumbers(array1));  // Output: true
console.log(checkNumbers(array2));  // Output: "Split"
console.log(checkNumbers(array3));  // Output: false




// Question 4 - FizzBuzz
// This is a classic programming question.
// Print out the numbers from 1 to 100, except
// If the number is a multiple of three, print Fizz
// If the number is a multiple of five, print Buzz
// If the number is a multiple of three and five, print FizzBuzz
// Your output might look something like 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz ....

// Your solution goes here

///start with for loop that loops through #s from 1 to 100
for (let i = 1; i <= 100; i++) {
    /// if statement to see if the # is a multiple of both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("GiveTake");
    }
    /// if not, else if statement to see if the # is a multiple of 3
    else if (i % 3 === 0) {
        console.log("Give");
    }
    /// if not, another elses if statement to see if the # is a multiple of 5
    else if (i % 5 === 0) {
        console.log("Take");
    }
    ///final If statement if none of the above conditions are true
    else {
        console.log(i); ///print the output 
    }
}



// Question 5 - Start my car
// Create a car variable (object)
// Give it the properties of make, model, year, and color
// Give it a start method that returns to the console "Vroom vroom! Car started!" or something similar
// Call the start method

// Your solution goes here
/// Create the car object and give it a make, model, year, and color
const car = {
    make: "Ferrari",    
    model: "488 Spider", 
    year: 2021,         
    color: "Jet Black",  

    /// Method to start the car
    start: function() {
        console.log("Vroom vroom! Car started!");
    }
};

/// Call the start method to print the message
car.start();




//Question 6 - How many states are there?
// Ok, this seems silly, but we're actually going to work with AJAX to get some data and process it
// You need to load a geojson file, convert it to json, and then count up the number of entires it has...
// In other words, print out to the console log the number of airports in the data set
// You'll want to use chapter 3 of the roth textbook and our lecture on Friday here.
// +2 bonus points if you tell me first how many total airports there are and then how many civilian 
// feel free to explore the data in QGIS (or arc). If you know how to answer the question in QGIS, how do you transfer it to javascript?

    //Step 1: Create the data request
    // You may not have your data stored in a data sub-directory, just update this appropriately
    var request = new Request('WHERE THE FILE IS IF IT IS REMOTE');

    //Step 2: define Fetch parameters
    // Note this isn't really necessary, do you remember/know why?
    //          **Fetch parameters are unnecessary in this situation, as this is a simple data retreival task.**
    //          **For fetching a GeoJSON file, the deafult parameters are enough to get the file correctly.**

    //Step 3: use Fetch to retrieve the data and set up callback functions
 
    



// Question 7 - Dynamically creating a list
// This problem draws heavily from Chapter 2 of your workbook (the Roth et al.), so make sure to review there if you're stuck!
// I'm going to give you two arrays as variables. One will have city names, the other their populations.
// You need to create a FUNCTION that takes in the two arrays (so the data is not created within them, this is different from the example in Chapter 2)
// The function should take in the arrays, combine them into an HTML FORMATTED TABLE
// The table should be added to an imaginary div with the id "mydiv"

//var cities = ['Corvallis', 'Portland', 'Eugene', 'Albany']
//var pops = ['59920', '652500', '176650', '56470']

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>City Populations Table</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 8px;
            text-align: left;
        }
    </style>
</head>
<body>

<!-- The div where the table will be inserted -->
<div id="mydiv"></div>

<script>
// Function to create a table with cities and their populations, passed as arguments
function make_table(cities, population){
    // Create the table element
    var table = document.createElement("table");

    // Create a header row
    var headerRow = document.createElement("tr");

    // Add the "City" column
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    // Add the "Population" column
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    // Add the header row to the table
    table.appendChild(headerRow);

    // Loop through the cities and population arrays
    for (var i = 0; i < cities.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cities[i];
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = population[i];
        tr.appendChild(pop);

        table.appendChild(tr);
    }

    // Add the table to the div in the HTML
    var myDiv = document.getElementById("mydiv");
    myDiv.appendChild(table);
};

// Function to initialize and call make_table
function initialize(){
    // Define the cities and population arrays
    var cities = ['Corvallis', 'Portland', 'Eugene', 'Albany'];
    var population = ['59920', '652500', '176650', '56470'];

    // Call the make_table function with the arrays as arguments
    make_table(cities, population);
}

// Call the initialize function when the window has loaded
window.onload = initialize;
</script>

</body>
</html>

    ////I used ChatGPT to generate this code