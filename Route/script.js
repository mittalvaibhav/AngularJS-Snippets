var app = angular.module("routeApp", ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html',
			controller: 'mainController'
		})
		.when('/about', {
			template: "<h1>About controller using template</h1>",
			/*templateUrl : 'pages/about.html',*/
			controller : 'aboutController'
		})
		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller: 'contactController'
		})
		/*.otherwise({
			templateUrl : 'pages/home.html',
			controller: 'contactController'			
		});*/
		.otherwise({
			redirectTo: "/"
		});
});


app.controller("mainController", function($scope){
	$scope.message = "Controller for Home page!";
	console.log("Inside main route");
});

app.controller("aboutController", function($scope){
	$scope.message = "Controller for about page!";
	console.log("Inside about route");
});

app.controller("contactController", function($scope){
	$scope.message = "Controller for Contact page!";
	console.log("Inside contact route");
});