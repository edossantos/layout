define(["app", "handlebars","text!apps/home/home/templates/home.html", "jssor-core","jssor-slider","jssor-utils"]
	, function(layoutApp, Handlebars, homeTpl){
	layoutApp.module("HomeApp.Home.View", function(View, layoutApp, Backbone, Marionette, $, _){
		View.Home = Backbone.Marionette.ItemView.extend({
			className: "container",
			template: Handlebars.compile(homeTpl),
			
		});

	});
	return layoutApp.HomeApp.Home.View;
});