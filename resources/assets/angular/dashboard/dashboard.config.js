(function () {
	angular.module("StarterApp").config(function ($stateProvider) {
		$stateProvider

		.state('dashboard', {
			url: "/dashboard",
			templateUrl: "..\\angular\\dashboard\\dashboard.html",
			controller: "DashboardController"
		});

	});
})();