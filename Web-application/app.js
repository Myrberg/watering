/**
 * Created by damyr1 on 2015-04-14.
 */
(function(){
    'use strict';

    var app = angular.module('WateringMdApp', ['WateringMdApp.controllers', 'ngMaterial']);

    app.config(function ($mdTHemingProvider){
		$mdThemingProvider.theme('black')
			.primaryPalette('grey', {
				'default': '900'
			});

			$mdThemingProvider.setDefaultTheme('black');
		});
			

})();