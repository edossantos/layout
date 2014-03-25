define(["app", "handlebars", "text!apps/reservation/list/templates/reservation.html", 
		"pickerDate", 
		"pickerTime"]
	,function(layoutApp, Handlebars, reservationTpl){
		layoutApp.module("ReservationApp.Reservation.View", function(View, layoutApp, Backbone, Marionette, $, _){
			View.Reservation = Backbone.Marionette.ItemView.extend({
				className: "container",
				id: "reservation",
				template: Handlebars.compile(reservationTpl),
				events: {
					"click #inputDate": "getDate",
					"click #inputTime": "getTime",
					"submit form": "submitForm"
				},
				getDate: function(e){
					e.preventDefault();
					$('#inputDate').pickadate();

				},
				getTime: function(e){
					e.preventDefault();
					$("#inputTime").pickatime();
				}, 
				submitForm: function(e){
					e.preventDefault();
					
				}

			});
		});
		return layoutApp.ReservationApp.Reservation.View;
	});