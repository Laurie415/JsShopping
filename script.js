
var app = angular.module("shoppingListApp", []);

app.controller('itemsCtrl', function($scope) {
	//create blank pet variables
	$scope.newItemName = "";
	$scope.newItemType = "";
	$scope.newItemQuantity = "";

	// These are the types available.
	$scope.itemTypes = ["Food", "Exercise", "Beauty", "Home", "Other"];

	// This acts as our model.
	$scope.items = [];

	// Function that adds a new item when the form is submitted.
	$scope.addNewItem = function() {
		//check to see if any of the form is blank
		if($scope.newItemName != "" &&
		   $scope.newItemQuantity != "" &&
		   $scope.newItemType != "") {
		   	if(!isNaN($scope.newItemQuantity)) {
				//add the new item to the items array in our model
				$scope.items.push({ name: $scope.newItemName,
								   quantity: $scope.newItemQuantity,
								   type: $scope.newItemType,
								   bought: false});
				//reset the new pet variables
				$scope.newItemName = "";
				$scope.newItemQuantity = "";
				$scope.newItemType = "";
			}
			else {
				alert("Please enter a number in the quantity field.");
			}
		}	
		//else, the form is blank alert the user
		else {
			alert("Please fill in both fields.");
		}
	};

	// Run a function that removes items.
	$scope.buyItem = function() {
		//create a temp variable that we can put all the pets in
		var tempItems = $scope.items;
		//remove all the pets from the original variable
		$scope.items = [];

		//loop through the temp variable with the forEach angular function
		angular.forEach(tempItems, function(item) {
			//if the pet has not been adopted put it back into the original variable
			if(!item.bought) {
				$scope.items.push(item);
			}
		});	
	};
	
	// Create a function that returns the number of remaining items 
	// that has to be given back.
	$scope.remainingItems = function () {
		var remItems = $scope.items.length;

		angular.forEach($scope.items, function(item) {
			if(item.bought)
				remItems--;
		});
		return remItems;
	}
});