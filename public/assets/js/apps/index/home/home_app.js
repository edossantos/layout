define(["app"], function(layoutApp){
	layoutApp.module("HomeApp", function(HomeApp, layoutApp, Backbone, Marionette, $, _){
		HomeApp.Router = Marionette.AppRouter.extend({
			appRoutes: {
				"index/:id": "showHomeItem"
				
			}
			});
			var API = {
				showHomeItem: function(id){
					require(["apps/index/home/home_controller"], function(ShowController){
						ShowController.showHome();
						console.log("message " + id);
					});
				}

			};
			layoutApp.on('index:layout', function(){
				console.log("index from home_app.js");
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