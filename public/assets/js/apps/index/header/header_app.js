define(["app", "apps/index/header/list/list_controller"], function(layoutApp, ListController){
	layoutApp.module("HeaderApp", function(Header, layoutApp, Backbone, Marionette, $, _){
		var API = {
			listHeader: function(){
				ListController.listHeader();
			}
		};
		layoutApp.commands.setHandler("set:active:header", function(name){
			ListController.setActiveHeader(name);
			
		});

		layoutApp.on("start", function(){
			API.listHeader();
		});

	});
	
	return layoutApp.HeaderApp;
});