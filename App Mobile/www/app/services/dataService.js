(function () {
	'use strict';

	var dataService = function($http, CONFIG){
		return {
			getData : function(){
				return $http.get(CONFIG.API_URL+'/users');
			},

			postData : function(data){
				return $http.post(CONFIG.API_URL+'/users', {fname: data.fname, lname: data.lname, age: data.age});
			}

		}
	};

	dataService.$inject = ['$http', 'CONFIG'];
	angular.module('starter').factory('dataService', dataService)
	
}());