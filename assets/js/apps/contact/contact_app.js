define(["app"], function(layoutApp){
	layoutApp.module("ContactApp", function(ContactApp, layoutApp, Backbone, Marionette, $, _){
		ContactApp.onStart = function(){
			console.log("starting ContactApp");
		};
		ContactApp.onStop = function(){
			console.log("stoping ContactApp");
		};
	});
	layoutApp.module("Routers.ContactApp", function(ContactAppRouter, layoutApp, Backbone, Marionette, $, _){
		ContactAppRouter.Router = Marionette.AppRouter.extend({
			AppRoutes: {
				"contact": "showContact"
			}
		});
		var executeAction = function(action, arg){
			layoutApp.startSubApp("ContactApp");
			action(arg);
			layoutApp.execute("set:active:header", "contact");
		};
		var API = {
			showContact: function(){
				require(["apps/contact/show/show_controller"], function(showController){
					executeAction(showController.showContact);
				
				});
			}
		};
		layoutApp.on("contact:layout", function(){
			layoutApp.navigate("contact");
			API.showContact();

		});
		layoutApp.addInitializer(function(){
			new ContactAppRouter.Router({
				controller: API
			});
		});
	});
	return layoutApp.ContactAppRouter;
});