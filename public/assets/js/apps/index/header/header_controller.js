define(["app", "apps/index/header/header_view"], function(layoutApp, View){
	layoutApp.module("IndexApp.Header", function(Header, layoutApp, Backbone, Marionette, $, _){
		Header.Controller = {
			showHeader: function(){
				var view = new View.Header();
				layoutApp.headerRegion.show(view);
			},
			showMain: function(){
				var view = new View.Main();
				layoutApp.mainRegion.show(view);
			}
		};
	});
	return layoutApp.IndexApp.Header.Controller;
});