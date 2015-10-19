

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
			templateUrl: '/views/contact-page.html',
			link: function(scope, elem, attrs){

				elem.ready(function(){
				
				  var contactFormHost = 'http://localhost:3000/',
				      form = $(elem).children("form"),
				      notice = form.find('#notice');
				  if (form.length) {
				    form.submit(function(ev){
				      ev.preventDefault();
				      $.ajax({
				        type: 'POST',
				        url: contactFormHost + 'send_email',
				        data: form.serialize(),
				        beforeSend: function(){
				        },
				        success: function(response) {
				        	if( response === "Recaptcha Failed."){
				        		alert(JSON.stringify(response));
				        	}
				        	grecaptcha.reset();
				        },
				        error: function(xhr, ajaxOptions, thrownError) {
				          alert(thrownError);
				        }
				      });
				    });
				  }


				});
			}
		};
	});
})();