define(["app", "apps/footer/list/list_controller"], function(layoutApp, ListController){
 	layoutApp.module("FooterApp", function(Footer, layoutApp, Backbone, Marionette, $, _){
 		var API = {
 			listFooter: function(){
 				ListController.listFooter();
 			}
 		};
 		// layoutApp.commands.setHandler("set:active:footer", function(name){
 		// 	console.log("active");
 		// 	ListController.setActiveFooter(name);
 		// });
 		//On the APP start call the function listHeader inside the variable API
 		Footer.on("start", function(){
 			setTimeout(function() { API.listFooter(); }, 3000);
 		});
	
	});
	return layoutApp.FooterApp;
});