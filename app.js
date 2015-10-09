(function(){
	var app = angular.module('portfolioApp', []);
	app.directive('aboutPage',function(){
		return{
			restrict: 'E',
			templateUrl: 'about-page.html'
		};
	});
})();