define(["app"], function(layoutApp){
	layoutApp.module("HomeApp", function(HomeApp, layoutApp, Backbone, Marionette, $, _){
		HomeApp.Router = Marionette.AppRouter.extend({
			appRoutes: {
				"": "showHomeItem"
				
			}
			});
			var executeAction = function(action, arg){
		      layoutApp.startSubApp("HomeApp");
		      action(arg);
		      layoutApp.execute("set:active:header", "contacts");
		    };

			var API = {
				showHomeItem: function(id){
					require(["apps/index/home/home_controller"], function(ShowController){
						ShowController.showHome();
						executeAction(ShowController.showHome);
						console.log("message " + id);
					});
				}

			};
			layoutApp.on('index:layout', function(){
				console.log("index from home_app.js");
				API.showHomeItem();
				
			});
			layoutApp.on('about:layout', function(){
				console.log("index click");
				API.showHomeItem();
				
			});
			layoutApp.addInitializer(function(){
      			new HomeApp.Router({
        		controller: API
     			 });
  			});
		});
	
	return layoutApp.HomeApp;
});