jumpWeight = ["jump", "weight"];


// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')();
// Import the gravityFactors module which contains factors for different planets
let gravityFactors = require('./utils/earthGravityFactors.js');
// Define a function to show user factors based on input type and value
function calculateValues(chosenFactors, factorUnit) {
    // Initialize an object to hold the results
    const factors = {};
    // Declare a variable to hold the unit of measurement
    let factorMeasurement;
    // Iterate over each item in the gravityFactors object
    for (let planet in gravityFactors) {
        // Calculate the factor multiplied by the input value and round it to two decimals
        factors[planet] = parseFloat((factorType * gravityFactors[planet]).toFixed(2));
    };
    // Switch case to determine the measurement unit based on factor type
    switch (factorType) {
        case 'jump':
            factorMeasurement = 'cm';
            break;
        case 'weight':
            factorMeasurement = 'kg';
            break;
        default:
            factorMeasurement = 'units';
    };
    // Iterate over the results and log each one
    for (let planet in factors) {
        console.log(`Your weight on Mercury is xxkg`);
        console.log(`Your ${factorType} on ${planet} is ${factors[planet]}${factorMeasurement}`);
    }
}





// Define a function to get user inputs for factor type and value
// Prompt the user to enter the type of factor they want to calculate
// Prompt the user to enter the numerical value of the factor
// Call the showUserFactors function with the user inputs and the gravity factors
// Expose getUserFactors globally
// let factorType;
function getUserInput() {

    while (true) {
        console.log("enter what you want to measure (please enter 'weight' or 'jump' or 'pushups");
        const factorType = prompt('>>').trim().toLowerCase();
        if (factorType === "weight" || factorType === "jump" || factorType === "pushups") {
            break;
        } else {
            console.error(`You entered ${factorType} which is not valid!`);
        }
    };

    while (true) {
        console.log("enter what you want to measure (please enter 'metric' or 'imperial'");
        const factorSystem = prompt('>>').trim().toLowerCase();
        if (factorSystem === "metric" || factorSystem === "imperial") {
            break;
        } else {
            console.error(`You entered ${factorSystem} which is not valid!`);
        }
    };

    while (true) {
        console.log("enter what you want to measure (please enter 'cm' or 'kg' or 'units'");
        const factorMeasurement = prompt('>>').trim().toLowerCase();
        if (factorMeasurement === "cm" || factorMeasurement === "kg" || factorMeasurement === "units") {
            break;
        } else {
            console.error(`You entered ${factorMeasurement} which is not valid!`);
        }
    };

    while (true) {
        console.log("enter what your value is");
        const factorValue = prompt('>>').trim().toLowerCase();
        if (!isNaN(factorValue)) {
            break;
        } else {
            console.error(`You entered ${factorValue} which is not valid!`);
        }
    };

    while (true) {
        console.log("enter what planet system you want ('earth' or 'alien')");
        const factorPlanets = prompt('>>').trim().toLowerCase();
        if (factorPlanets === "earth" || factorPlanets === "alien") {
            break;
        } else {
            console.error(`You entered ${factorPlanets} which is not valid!`);
        }
    };

};

// calculateValues(factorType, factorValue, FactorPlanets, factorSystem, factorMeasurement);
// showUserFactors(factorType, factorValue, FactorPlanets, factorSystem, factorMeasurement);

global.calculateValues = calculateValues;
global.getUserInput = getUserInput;