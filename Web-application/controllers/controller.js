//This cotroller deliveres sensor data to index.html
(function () {
	'use strict';

	var module = angular.module('WateringMdApp.controllers.controller', []);

	module.controller('MainCtrl', ['$scope', '$http', function($scope, $http){

            $scope.resutls = [];
            $scope.isSearching = false;

            $scope.search = function() {

                $scope.isSearching = true;

                $http({
                    method: 'GET',
                    url:    'https://api.flickr.com/services/rest',
                    params: {
                        method: 'flickr.photos.search',
                        api_key: '04270acccfe17fda7693c5490864c373',
                        text: $scope.searchTerm,
                        per_page:10,
                        format: 'json',
                        nojsoncallback:1
                    }
                }).success(function(data){

                    $scope.results = data;
                    $scope.isSearching = false;

                }).error(function(error){
                    console.error(error);
                });

            };

        }]);	
})();
