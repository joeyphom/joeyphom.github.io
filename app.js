

(function(){
	var app = angular.module('portfolioApp', []);

	app.controller('ContentController',function(){
		this.tab = "about";
		this.tabWelcome = "WELCOME";
		this.tabSubtext = ""
		this.selectTab = function(tabName){
			this.tab = tabName;
			switch (this.tab){
				case "about":
					this.tabWelcome = "WELCOME";
					this.tabSubtext = ""
					break;
				case "contact":
					this.tabWelcome = "CONTACT ME";
					this.tabSubtext = ""
					break;
				case "portfolio":
					this.tabWelcome = "MY PORTFOLIO";
					this.tabSubtext = "View a sample of my projects"
					break;
			}
		};
		this.isSelected = function(tabName){
			return this.tab === tabName;
		};
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
				var submitBtn = $(elem).children("form").find("#sendBtn");
				var loadingBtn = $(elem).children("form").find("#sendingBtn");
				$.getScript("https://www.google.com/recaptcha/api.js");

				var submitBtnTrans = function(currentState){
					if(currentState === "Send"){
						submitBtn.hide();
						loadingBtn.show();
					}
					else if(currentState === "Sending"){
						loadingBtn.hide();
						submitBtn.show();
					}
				};
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
				        beforeSend: function(){
				        	$(".alert").fadeOut();
				        	submitBtnTrans("Send");
				        },
				        success: function(response) {
				        	if( response === "Recaptcha Failed."){
				        		$(".alert.alert-danger").fadeIn();
				        	}
				        	else{
				        		$(".alert.alert-success").fadeIn();
				        	}
				        	//notice.text("Message Successfully Sent").fadeIn();
				        	submitBtnTrans("Sending");
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