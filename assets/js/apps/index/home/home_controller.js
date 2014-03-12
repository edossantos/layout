define(["app", "apps/index/home/home_view"], function(layoutApp, View){
	layoutApp.module("HomeApp.Home", function(Home, layoutApp, Backbone, Marionette, $, _){
		Home.Controller = {
			showHome: function(){
				var view = new View.Home();
				layoutApp.mainRegion.show(view);
			}
		};
	});
	return layoutApp.HomeApp.Home.Controller;
});