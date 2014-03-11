define(["app", "text!apps/index/template/about.html"], function(layoutApp, aboutTpl){
	layoutApp.module("AboutApp.About.View", function(View, layoutApp, Backbone, Marionette, $, _){
		View.About = Backbone.Marionette.ItemView.extend({
			className: "container-full row row-offcanvas row-offcanvas-left",
			template: _.template(aboutTpl)
		});
	});
	return layoutApp.AboutApp.About.View;
});