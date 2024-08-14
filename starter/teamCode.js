// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')();
// Import the gravityFactors module which contains factors for different planets
let gravityFactors = require('./utils/earthGravityFactors.js');
// Define a function to show user factors based on input type and value
function calculateValues(chosenFactors, factorUnit) { 
// Initialize an object to hold the results
    const factors = {};
// Declare a variable to hold the unit of measurement
    let measurement;
// Iterate over each item in the gravityFactors object
    for (let planet in gravityFactors) {
// Calculate the factor multiplied by the input value and round it to two decimals
        factors[planet] = parseFloat((factorType * gravityFactors[planet]).toFixed(2));
    };
// Switch case to determine the measurement unit based on factor type
    switch (factoryType) {
        case 'jump':
            measurement = 'cm';
            break;
        case 'weight':
            measurement = 'lm';
            break;
        default:
            measurement = 'units';
    };
// Iterate over the results and log each one
    
}



function calculateUserInput(inputValue) {
    let results = {};
    for (let something in gravityFactors) {
        results = parseFloat(inputValue * gravityFactors[something]).toFixed(2)
    }
}

// Define a function to get user inputs for factor type and value
// Prompt the user to enter the type of factor they want to calculate
// Prompt the user to enter the numerical value of the factor
// Call the showUserFactors function with the user inputs and the gravity factors
// Expose getUserFactors globally
function getUserInput() {
    console.log("Enter your values in kg");
    const userPrompt = prompt(">");
    console.log("What do you want to calculate on different planets");
};
global.calculateUserInput = calculateUserInput;