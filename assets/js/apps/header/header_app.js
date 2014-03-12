define(["app", "apps/header/list/list_controller"], function(layoutApp, ListController){
 	layoutApp.module("HeaderApp", function(Header, layoutApp, Backbone, Marionette, $, _){
 		var API = {
 			listHeader: function(){
 				ListController.listHeader();
 			}
 		};
 		layoutApp.commands.setHandler("set:active:header", function(name){
 			console.log("active");
 			ListController.setActiveHeader(name);
 		});
 		//On the APP start call the function listHeader inside the variable API
 		Header.on("start", function(){
 			API.listHeader();
 		});
	
	});
	return layoutApp.HeaderApp;
});