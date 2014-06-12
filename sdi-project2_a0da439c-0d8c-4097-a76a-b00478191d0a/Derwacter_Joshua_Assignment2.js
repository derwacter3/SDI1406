//alert("JavaScript works!");

// Joshua Derwacter
// SDI 1406
// Project 2

// Variables
var buildingOne = "Pylon";
var buildingTwo = "Assimilator";
var buildingThree = "Photon Cannon";
var pylonTime = 30;
var assimilatorTime = 40;
var photonCannonTime = 50;

var multiplicationFunction = function() {
	
	totalTime = pylonTime * 5
	
	console.log("The total time for five " + buildingOne +  " will be " + totalTime + " seconds.");
	
};

multiplicationFunction();

var assimilatorFunction = function() {
	
	totalTime = assimilatorTime * 2
	
	console.log("The total time for two " + buildingTwo + " will be " + totalTime + " seconds.");
	
};

assimilatorFunction();

var photonCannonFunction = function() {

	totalTime = photonCannonTime * 10
	
	console.log("The total time for ten " + buildingThree + " will be " + totalTime + " seconds.");
	
};

photonCannonFunction();
