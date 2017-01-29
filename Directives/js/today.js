angular.module("classApp", [])

.controller("sumecontrollero", function($scope) {
	$scope.name = "UCA";
	$scope.names = ["UCA2", "UCA3"];
	console.log("Inside somecontrooleroooo");
})

.controller("sumecontroller", function() {
	this.shop = "UCA";
	this.shopkeepers = ["SK1", "SK2"];
	this.somefunction = function() {
	console.log("Inside somecontrooler");
	};
})

.controller("sumecontrollertwo", function() {
	this.shopkeepers = [
	{name: "SK1", des: "shopkeeper1", isOpen: true},
	{name: "SK2", des: "shopkeeper1", isOpen: false}
	];
	console.log("Inside somecontrooler");
})

.controller("sumecontrollerthree", function() {
	this.image = "images/Hydrangeas.jpg";
})
.controller("cusdircontroller", function() {
	this.name = "SomeName";
	this.name2 = "SomeName2";
})
.controller("onemorecontroller", function($scope) {
	$scope.somevar = 1;
})
.directive("templateone", function() {
	return {
		restrict:"A",
		/*template: "<h2>Personal template</h2>",*/
		templateUrl:"template/templateone.html",
		controller: "cusdircontroller",
		controllerAs: "cusdirctrl"
	};
})
