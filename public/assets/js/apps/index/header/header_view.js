define(["app", "text!apps/index/template/header.html", "text!apps/index/template/main.html"],
	 function(layoutApp, headerTpl, mainTpl){
	layoutApp.module("IndexApp.Header.View", function(View, layoutApp, Backbone, Marionette, $, _){
		View.Header = Backbone.Marionette.ItemView.extend({
			template: _.template(headerTpl),
			events: {
				"click #home": "home",
				"click #menu": "menu"
			},
			home: function(){
				require(["apps/index/home/home_controller"], function(ShowController){
						ShowController.showHome();
						console.log("home yo");
					});
			},
			menu: function(){
				require(["apps/index/menu/menu_controller"], function(ShowController){
						ShowController.showMenus();
						console.log("menu yo");
					});
			}
		});
		View.Main = Backbone.Marionette.ItemView.extend({
			template: _.template(mainTpl)
		});
	});
	return layoutApp.IndexApp.Header.View;
});