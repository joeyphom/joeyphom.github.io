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
				
				  var contactFormHost = 'https://portfolio-mailer.herokuapp.com/',
				      form = $(elem).children("form"),
				      notice = form.find('#notice');

				  if (form.length) {
				    form.submit(function(ev){
				      ev.preventDefault();
				      $.ajax({
				        type: 'POST',
				        url: contactFormHost + 'send_email',
				        data: form.serialize(),
				        dataType: 'json',
				        success: function(response) {
				          switch (response.message) {
				            case 'success':
				            	alert("success");
				              form.fadeOut(function() {
				                form.html('<h4>' + form.data('success') + '</h4>').fadeIn();
				              });
				              break;

				            case 'failure_email' :{
				            	alert("email failed");
				            }
				          }
				        },
				        error: function(xhr, ajaxOptions, thrownError) {
				          alert("Error");
				        }
				      });
				    });
				  }


				});
			}
		};
	});
})();