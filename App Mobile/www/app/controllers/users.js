(function () {
	'use strict';

	var usersCtrl = function ($scope, dataService){
		dataService.getData()
			.then(function(resp) {
			    $scope.users = resp.data;
			    toast('Data Gathered', 2000)
			}, function(err) {
		    	console.error('ERR', err);
			    // err.status will contain the status code
			});

		$scope.dataSend = function (data){
			//console.log(data);
			dataService.postData(data)
				.then(function(resp){
					toast(resp.message, 2000)
				});
			data.fname = '';
			data.lname = '';
			data.age   = '';
		}	

		$scope.$watch($scope.users, function(newVal, oldVal){
			if (!newVal) return;
			$scope.users = newVal;
		})
		/*$scope.doRefresh = function() {
			dataService.getData()
				.then(function(resp) {
				    $scope.users = resp.data;
				    console.log(resp.data);
				    toast('Data Gathered', 2000);
				})
				.finally(function() {
			       // Stop the ion-refresher from spinning
			       $scope.$broadcast('scroll.refreshComplete');
			       $scope.apply();
	     		});
	    }*/
	};

	usersCtrl.$inject = ['$scope', 'dataService'];
	angular.module('starter').controller('usersCtrl', usersCtrl)

	
}());