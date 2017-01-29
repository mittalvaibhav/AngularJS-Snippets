var app = angular.module("angApp", ["ui.router"]);

/*Single Nested View*/
/*app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state("board1", {
		url: "/board1",
		templateUrl: "templates/board1.html"
	})
	.state("board1.list", {
		templateUrl: "templates/board1-notes.html"
	})
	.state("board1.details", {
		templateUrl: "templates/board1-details.html"
	})
	.state("board2", {
		url: "/board2",
		templateUrl: "templates/board2.html"
	})

});*/

app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state("board", {
		url: "/boards",
		views: {
			"board1": {
				templateUrl: "templates/board1.html"
			},
			"board2": {
				templateUrl: "templates/board2.html"				
			}
		}
	})
});