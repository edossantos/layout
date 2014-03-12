define(["app"], function(layoutApp){
	layoutApp.module("ReservationApp", function(ReservationApp, layoutApp, Backbone, Marionette, $, _){
		ReservationApp.onStart = function(){
			console.log("Starting ReservationApp");
		};
		ReservationApp.onStop = function(){
			console.log("stoping ReservationApp");
		};
	});
	layoutApp.module("Routers.ReservationApp", 
		function(ReservationAppRouter, layoutApp, Backbone, Marionette, $, _) {
		ReservationAppRouter.Router = Marionette.AppRouter.extend({
			AppRoutes: {
				"reservation": "showReservation"
			}
		});
		var executeAction = function(action, arg){
			layoutApp.startSubApp("ReservationApp");
			action(arg);
			layoutApp.execute("set:active:header", "reservation");
		};
		var API = {
			showReservation: function(){
				require(["apps/reservation/list/list_controller"], function(showController){
					executeAction(showController.showReservation);
				});
			}
		};
		layoutApp.on("reservation:layout", function(){
			layoutApp.navigate("reservation");
			API.showReservation();
		});
		layoutApp.addInitializer(function(){
			new ReservationAppRouter.Router({
				controller: API
			});
		});
	});
	return layoutApp.ReservationAppRouter;
});