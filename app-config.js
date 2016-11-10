angular
	.module("App")
	.config(AppCfg);

AppCfg.$inject = ["$routeProvider"];

function AppCfg($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.view.html'
		})
		.when('/about', {
			templateUrl: 'views/about.view.html'
		})
		.otherwise({
			redirectTo: '/'
		});
};