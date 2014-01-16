function petsCtrl($scope) {
	$scope.newPetName = "";
	$scope.newPetImage = "";
	$scope.pets = [
		{name:"Ben", image:"http://www.placekitten.com/150/150",adopted:false},
		{name:"Pickle", image:"http://www.placekitten.com/151/150",adopted:false},
		{name:"Ethel", image:"http://www.placekitten.com/152/150",adopted:false}
	];

	$scope.addNewPet = function() {
		if ($scope.newPetName != "" && $scope.newPetImage != "") {
			$scope.pets.push({name:$scope.newPetName,image:$scope.newPetImage,adopted:false});
			$scope.newPetName = "";
			$scope.newPetImage = "";
		}
		else {
			alert('please fill out form');
		}
	};
}