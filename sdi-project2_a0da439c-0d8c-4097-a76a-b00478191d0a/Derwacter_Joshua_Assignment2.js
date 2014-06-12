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

// Functions
var multiplicationFunction = function() {
	
	totalTimePylon = pylonTime * 5
	
	console.log("The total time for five " + buildingOne +  " will be " + totalTimePylon + " seconds.");
	
};

var whileLoop = function(pylons){
	
	while(pylons > 0) {
		
		console.log("Pylons have this much time left " + totalTimePylon);
	}

multiplicationFunction();

var assimilatorFunction = function() {
	
	totalTimeAssimilator = assimilatorTime * 2
	
	console.log("The total time for two " + buildingTwo + " will be " + totalTimeAssimilator + " seconds.");
	
};

var whileloop = function(assimilators) {
	
	while(assimilators > 0) {
		
		console.log("Assimilators have this much time left " + totalTimeAssimilator)
};

assimilatorFunction();

var photonCannonFunction = function() {

	totalTimePhotonCannon = photonCannonTime * 10
	
	console.log("The total time for ten " + buildingThree + " will be " + totalTimePhotonCannon + " seconds.");
	
};

var whileloop = function(photoncannons) {

	while(photoncannons > 0) {
		
		console.log("Photon cannons have this much time left" + totalTimePhotonCannon)
};

photonCannonFunction();
