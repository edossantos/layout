define(["app"], function(layoutApp){
	layoutApp.module("IndexApp", function(IndexApp, layoutApp, Backbone, Marionette, $, _){
		IndexApp.Router = Marionette.AppRouter.extend({
			appRoutes: {
				"": "showIndex",
				"index": "showIndex",
				"about": "showAbout",
				"menu": "showMenu"
			}
			});
			var API = {
				showIndex: function(){
					require(["apps/index/header/header_controller", "apps/index/home/home_controller"], 
						function(ShowController, HomeController){
						ShowController.showHeader();
						HomeController.showHome();
						
					});
				},
				showAbout: function(){
					require(["apps/index/header/header_controller", "apps/index/about/about_controller" ], function(ShowController, AboutController){
						ShowController.showHeader();
						AboutController.showAbout();
						console.log("about yo");
					});
				},
				showMenu: function(){
					require(["apps/index/header/header_controller", "apps/index/menu/menu_controller"], function(ShowController, MenuController){
						ShowController.showHeader();
						MenuController.showMenus();
						console.log("menu yo");
					});
				}

			};
			layoutApp.on('index:layout', function(){
				console.log("index from index_app.js");
				API.showIndex();
				
			});
			layoutApp.addInitializer(function(){
      			new IndexApp.Router({
        		controller: API
     			 });
  			});
		});
	
	return layoutApp.IndexApp;
});