(function(){
	var app = angular.module('portfolioApp', []);
	
	app.controller('ContentController',function(){
		this.tab = "about";
		this.selectTab = function(tabName){
			this.tab = tabName;
		};
		this.isSelected = function(tabName){
			return this.tab === tabName;
		}
	});
	app.directive('aboutPage',function(){
		return{
			restrict: 'E',
			templateUrl: '/views/about-page.html'
		};
	});

	app.directive('portfolioPage',function(){
		return{
			restrict: 'E',
			templateUrl: '/views/portfolio-page.html'
		};
	});

	app.directive('contactPage',function(){
		return{
			restrict: 'E',
			templateUrl: '/views/contact-page.html'
		};
	});
})();