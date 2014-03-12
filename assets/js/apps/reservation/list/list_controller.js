define(["app", "apps/reservation/list/list_view"], function(layoutApp, View){
	layoutApp.module("ReservationApp.Reservation", function(Reservation, layoutApp, Backbone, Marionette, $, _){
		Reservation.Controller = {
			showReservation: function(){
				var reservationView = new View.Reservation();
				layoutApp.mainRegion.show(reservationView);
			}
		};
	});
	return layoutApp.ReservationApp.Reservation.Controller;
});