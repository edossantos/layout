define(["app", "apps/home/home/home_view"], function(layoutApp, View){
	layoutApp.module("HomeApp.Home", function(Home, layoutApp, Backbone, Marionette, $, _){
		Home.Controller = {
			showHome: function(){
				var homeView = new View.Home();
				homeView.on("Reservation:clicked", function(){
					require(["apps/reservation/reservation_app"], function(){
						$(window).scrollTop(0,0);
						layoutApp.trigger("reservation:layout");
					});
				});
				homeView.on("Menus:clicked", function(){
					require(["apps/menu/menu_app"], function(){
						$(window).scrollTop(0,0);
						layoutApp.trigger("menus:layout");
					});
				});
				homeView.on("About:clicked", function(){
					require(["apps/about/about_app"], function(){
						$(window).scrollTop(0,0);
						layoutApp.trigger("about:layout");
					});
				});
				homeView.on("Schedule:clicked", function(){
					require(["apps/contact/contact_app"], function(){
						$(window).scrollTop(0,0);
						layoutApp.trigger("contact:layout");
					});
				});
				homeView.on("Direction:clicked", function(){
					require(["apps/contact/contact_app"], function(){
						$(window).scrollTop(0,0);
						layoutApp.trigger("contact:layout");
					});
				});
				homeView.on("Contact:clicked", function(){
					require(["apps/contact/contact_app"], function(){
						$(window).scrollTop(0,0);
						layoutApp.trigger("contact:layout");
					});
				});
				layoutApp.mainRegion.show(homeView);
			}
		};
	});
	return layoutApp.HomeApp.Home.Controller;
});