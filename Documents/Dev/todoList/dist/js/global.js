var app = angular.module("todoList", [

]);

app.controller("mainCtrl", ['$scope', function($scope) {
	$scope.numbers = ['0','1','2','3','4','5','6','7','8','9','+','-','/','*','.'];

	$scope.expression = '';
	$scope.result = '';

	$scope.add = function(x) {
		$scope.expression += '' + x;
	}

	$scope.showResult = function() {
		$scope.result = eval($scope.expression);
	}

	$scope.reset = function() {
		$scope.expression = '';
		$scope.result = '';
	}

	$scope.checkValidNumbers = function() {
		if($scope.numbers.indexOf($scope.expression))
			return false
		else
			return true
	}

}]);