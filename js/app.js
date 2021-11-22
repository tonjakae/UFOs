// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
// Declare a variable, tbody. Use d3.select to tell JavaScript to look for the <tbody> tags in HTML
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
}

// Takes two numbers and adds them. Create the function code first, THEN type console.log(addition(a, b));
function addition(a, b) {
    return a + b;
}
console.log(addition(4, 5));

// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
}
console.log(doubleAddition(65, 34));

// Simple JavaScript log statement
function printHello() {
    return "Hello there!";
}
console.log("Hello there!");

// Converted to an arrow function
printHello = () => "Hello there!";

// Original addition function
function addition(a, b) {
    return a + b;
}
console.log(addition(a, b));

// Converted to an arrow function
addition = (a, b) => a + b;

// Original doubleAddition function
function doubleAddition(c, d,) {
    var total = addition(c, d) * 2;
    return total;
}
console.log(doubleAddition(14, 15));

doubleAddition = (c, d) => addition(c, d) * 2;

// Creating an array
let friends = ["Ava", "Dustin", "Mom", "Grandma"];

// Creating a for loop. the 0 indicates we are starting our iteration at the beginning (zero)
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
        console.log(userList[i]);
    }
}
console.log(listLoop(friends));

// for loop practice
let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[1]);
}

// loop through numbers without using an array
for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
}

// Building a table so name the function buildTable. "data" is the argument
function buildTable(data) {
    //First, clear out any existing data
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}
