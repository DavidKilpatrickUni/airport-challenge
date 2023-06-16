const { Airport } = require(`../src/Airport.js`);
const { assertEquals } = require(`./testingFramework`);
const { Plane } = require(`../src/Plane.js`);


console.log('Weather Tests');
console.log('----------------------------------');

// Access the weatherSafeForAction for an airport using method call. 

//arrange

expected = true;
airport = new Airport('Sunny Airport');

//act

actual = airport.getWeatherSafeForAction();

//assert

result = assertEquals(actual, expected);
console.log(`Test 1 - Weather is good by default , therefore weather is safe (true) ${result ? `PASS` : `FAIL`}`);

//cleanup

airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;

// Change weather to unsafe because its stormy manually . 

//arrange

expected = false;
airport = new Airport('Stormy Airport');

//act

airport.setWeatherSafeForAction(false);

actual = airport.getWeatherSafeForAction();

//assert

result = assertEquals(actual, expected);
console.log(`Test 2 - Weather set to not safe (false) , therefore result is false ${result ? `PASS` : `FAIL`}`);

//cleanup


airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;

console.log('----------------------------------');