define(["app", "text!apps/index/template/home.html"], function(layoutApp, homeTpl){
	layoutApp.module("HomeApp.Home.View", function(View, layoutApp, Backbone, Marionette, $, _){
		View.Home = Backbone.Marionette.ItemView.extend({
			template: _.template(homeTpl)
		});
	});
	return layoutApp.HomeApp.Home.View;
});