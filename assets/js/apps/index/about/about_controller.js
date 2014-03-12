define(["app", "apps/index/about/about_view"], function(layoutApp, View){
	layoutApp.module("AboutApp.About", function(About, layoutApp, Backbone, Marionette, $, _){
		About.Controller = {
			showAbout: function(){
				var view = new View.About();
				layoutApp.mainRegion.show(view);
			}
		};
	});
	return layoutApp.AboutApp.About.Controller;
});