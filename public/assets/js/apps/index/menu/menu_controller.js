define(["app", "apps/index/menu/menu_view"], function(layoutApp, View){
	layoutApp.module("MenuApp.Menu", function(Menu, layoutApp, Backbone, Marionette, $, _){
		Menu.Controller = {
			showMenus: function(){
				require(["entities/menu"], function(){
					var fetchingMenu = layoutApp.request("menu:entities");

					$.when(fetchingMenu).done(function(menus){

						var view = new View.Menus({
						collection: menus
						});

						layoutApp.mainRegion.show(view);

					});
					
				});
			},
			showMenu: function(id){
				require(["entities/menu"], function(){
					var menuItem = layoutApp.request("menu:entity", id);
					var menuView;
					if(menuItem !== undefined){
						var view = new View.Menus({
						model: menuItem
						});

						layoutApp.mainRegion.show(view);
					}
				
				});
			}
		};
	});
	return layoutApp.MenuApp.Menu.Controller;
});