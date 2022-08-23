// Declaring arrays for prices
var adultPrices = [6, 79, 8, 9, 30, 30];
var otherPrices = [4.50, 79, 5, 6, 30, 30];

// Declaring variables
var totalAdultCost = 0, totalOtherCost = 0;
var elNoAdults, elNoOthers, elTotalCost;
var i = 0;

// Function to calculate and display the total cost of the places for the number of peoples selected
function calculate() {
    checkedPlaces();
    elNoAdults = parseInt(document.getElementById("noAdults").value);
    elNoOthers = parseInt(document.getElementById("noOthers").value);
    elTotalCost = document.getElementById("totalCost");
    var totalCost = elNoAdults * totalAdultCost + elNoOthers * totalOtherCost;
    elTotalCost.innerHTML = "$"+totalCost;
    resetCosts();
}

// Function to check and add the places which the user has selected
function checkedPlaces() {
    var elCheckChecked = document.getElementsByClassName("checkChecked");
    // Checking to see which checkboxes are checked, and adding the prices according to the index of the checked checkbox
    for (i=0; i<elCheckChecked.length; i++) {
        if (elCheckChecked[i].checked == true) {
            totalAdultCost = totalAdultCost + adultPrices[i];
            totalOtherCost = totalOtherCost + otherPrices[i];
        }
    }
}

// Function to reset the cost displayed on screen
function resetCosts() {
    totalAdultCost = 0;
    totalOtherCost = 0;
}