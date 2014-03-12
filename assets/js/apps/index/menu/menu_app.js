define(["app"], function(layoutApp){
	layoutApp.module("Menu", function(Menu, layoutApp, Backbone, Marionette, $, _){
		Menu.Router = Marionette.AppRouter.extend({
			appRoutes: {
				"menus": "showMenu",
				"menu/:id": "showMenuItem"
				
			}
			});

		layoutApp.MenuItem = Backbone.Model.extend();

		layoutApp.MenuCollection = Backbone.Collection.extend({
			model: layoutApp.MenuItem
		});
		
			var menuList;

			var initializeMenuList = function(){
				menuList = new layoutApp.MenuCollection([{
					"id": 1,
					"name": "hello"
				},{
					"id": 2,
					"name": "hi"
				},
				{
					"id": 3,
					"name": "ho"
				}
				]);
				return menuList.models;
			};


			var API = {
				showMenu: function(){
					
						var menuList = new layoutApp.MenuCollection();
						// if(menuList.length === 0){
						// 	var models = initializeMenuList();
						// 	ShowController.showMenu(menuList);
						// }
					
				},
				showMenuItem: function(id){
					require(["apps/index/home/home_controller"], function(ShowController){
						layoutApp.trigger("menu:item", id);
						console.log("message" + id);
					});
				}

			};
			layoutApp.on('index:menu', function(model){
				console.log("getting menu from collection");
				API.showMenu();
				
			});
			layoutApp.addInitializer(function(){
      			new Menu.Router({
        		controller: API
     			 });
  			});
  			layoutApp.reqres.setHandler("menu:entities", function(){
  				return API.showMenu();
  			});
		});
	
	return layoutApp.Menu;
});