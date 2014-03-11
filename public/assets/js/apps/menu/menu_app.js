define(["app", "apps/menu/list/list_controller"], function(layoutApp, ListController){
	layoutApp.module("MenuApp", function(MenuApp, layoutApp, Backbone, Marionette, $, _){
		MenuApp.startWithParent = false;

    	MenuApp.onStart = function(){
      	console.log("starting MenuApp");
    	};

	    MenuApp.onStop = function(){
	      console.log("stopping MenuApp");
	    };
	  });
	layoutApp.module("Router.MenuApp", function(MenuAppRouter, layoutApp, Backbone, Marionette, $, _){
		MenuAppRouter.Router = Marionette.AppRouter.extend({
			appRoutes: {
				"menus": "listMenu"
			}
			
		});
			var executeAction = function(action, arg){
				layoutApp.startSubApp("MenuApp");
				action(arg);
				layoutApp.execute("set:active:header", "menus");
			}
			var API = {
			listMenu: function(){
				require(["apps/menu/list/list_controller"], function(showController){
					executeAction(showController.listMenu);
				});
				
			}
		};
		layoutApp.on('menus:layout', function(){
				//console.log("index from home_app.js");
				layoutApp.navigate("menus");
				API.listMenu();
				
			});
	});
	
	return layoutApp.MenuAppRouter;
});