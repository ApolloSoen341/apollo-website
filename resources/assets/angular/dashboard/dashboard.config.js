app.config(['$stateProvider',
	function($stateProvider) {
		$stateProvider
			.state('dashboard', {
				templateUrl: 'dashboard.html', // whats this?
				url: 'components/dashboard/dashboard.html'
		});
	}]
);