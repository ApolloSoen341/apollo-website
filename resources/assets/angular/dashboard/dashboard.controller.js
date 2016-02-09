/**
 * Created by matthew on 08/02/16.
 */

var app = angular.module('StarterApp', ['ngMaterial', 'ngRoute']);

app.controller('DashboardController', ['$scope', '$http',
	function ($scope, $http) {
		$scope.test = 'Francis forgot that semicolon though... ->';
		$scope.true = true;
	}]
);