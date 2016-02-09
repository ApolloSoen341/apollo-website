app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'dashboard.html',
			controller: 'DashboardController'
		});
	}]
);