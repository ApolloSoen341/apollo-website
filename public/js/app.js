var app = angular.module('StarterApp', ['ngMaterial', 'ui.router']);
app.config(['$stateProvider',
	function($stateProvider) {
		$stateProvider
			.state('dashboard', {
				templateUrl: 'dashboard.html', // whats this?
				url: 'components/dashboard/dashboard.html'
		});
	}]
);
app.controller('DashboardController', ['$scope', '$http',
	function ($scope, $http) {
		$scope.test = 'Francis forgot that semicolon though... ->';
		$scope.true = true;
	}]
);
//# sourceMappingURL=app.js.map
