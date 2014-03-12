define(["app"], function(layoutApp){
	layoutApp.module("HomeApp", function(HomeApp, layoutApp, Backbone, Marionette, $, _){
		HomeApp.startWithParent = false;

    	HomeApp.onStart = function(){
      	console.log("starting HomeApp");
    	};

	    HomeApp.onStop = function(){
	      console.log("stopping HomeApp");
	    };
	  });
	layoutApp.module("Routers.HomeApp", function(HomeAppRouter, layoutApp, Backbone, Marionette, $, _){
		HomeAppRouter.Router = Marionette.AppRouter.extend({
			appRoutes: {
				"home": "showHome"
				
			}
			});
			
		    var executeAction = function(action, arg){
		      layoutApp.startSubApp("HomeApp");
		      action(arg);
		      layoutApp.execute("set:active:header", "home");
		    };
			var API = {
				showHome: function(){
					require(["apps/home/home/home_controller"], function(ShowController){
						executeAction(ShowController.showHome);
						
					});
				}

			};
			layoutApp.on('index:layout', function(){
				console.log("index from home_app.js");
				layoutApp.navigate("home");
				API.showHome();
				
			});
			
			layoutApp.addInitializer(function(){
      			new HomeAppRouter.Router({
        		controller: API
     			 });
  			});
		});
	
	return layoutApp.HomeAppRouter;
});