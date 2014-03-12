define(["app"], function(layoutApp){
	layoutApp.module("AboutApp", function(AboutApp, layoutApp, Backbone, Marionette, $, _){
		AboutApp.startWithParent = false;

    	AboutApp.onStart = function(){
      	console.log("starting AboutApp");
    	};

	    AboutApp.onStop = function(){
	      console.log("stopping AboutApp");
	    };
	  });
	layoutApp.module("Routers.AboutApp", function(AboutAppRouter, layoutApp, Backbone, Marionette, $, _){
		AboutAppRouter.Router = Marionette.AppRouter.extend({
			appRoutes: {
				"about": "showAbout"
				
			}
			});
			
		    var executeAction = function(action, arg){
		      layoutApp.startSubApp("AboutApp");
		      action(arg);
		      layoutApp.execute("set:active:header", "about");
		    };
			var API = {
				showAbout: function(){
					require(["apps/about/show/show_controller"], function(ShowController){
						executeAction(ShowController.showAbout);
						
					});
				}

			};
			layoutApp.on('about:layout', function(){
				console.log("about from about_app.js");
				layoutApp.navigate("about");
				API.showAbout();
				
			});
			
			layoutApp.addInitializer(function(){
      			new AboutAppRouter.Router({
        		controller: API
     			 });
  			});
		});
	
	return layoutApp.AboutAppRouter;
});