var graphApp=angular.module("graphApp",[]);graphApp.config(function($locationProvider){$locationProvider.html5Mode(!0)}),graphApp.service("GraphData",["$rootScope","$location",GraphData]),graphApp.filter("cut",function(){return function(value,max,wordwise,tail){if(!value)return"";if(max=parseInt(max,10),!max)return value;if(value.length<=max)return value;if(value=value.substr(0,max),wordwise){var lastspace=value.lastIndexOf(". ");-1!=lastspace&&(value=value.substr(0,lastspace))}return value+(wordwise?".":tail||" ...")}}),window.ga&&window.ga("set","appName","History Explorer");