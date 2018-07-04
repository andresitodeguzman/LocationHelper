// Import the Script
importScripts('../dist/LocationHelper.js');

// Create an object
let location = new LocationHelper();

// Sample Data
let distance = 1000; // in meters
let speed = 10; // in meters per second

// Use method
let time = location.approximateTime(distance,speed);

// Log result in console
console.log(time);