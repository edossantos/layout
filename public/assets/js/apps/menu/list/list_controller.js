define(["app", "apps/menu/list/list_view"], function(layoutApp, View){
	layoutApp.module("MenuApp.List", function(List, layoutApp, Backbone, Marionette, $, _){
		List.Controller = {
			listMenu: function(){
				require(["entities/menu"], function(){
					var menuList = layoutApp.request("menu:entities");
					var menuAppertizer = new View.MenuAppertizerList({collection: menuList});
					var menuLunch = new View.MenuLunchList({collection: menuList});
					var menuDinner = new View.MenuDinnerList({collection: menuList});
					var menuDessert = new View.MenuDessertList({collection: menuList});
					var menuListLayout = new View.MenuLayout();
				menuAppertizer.on("itemview:navigate", function(childView, model){
					var trigger = model.get("navigationTrigger");
					layoutApp.trigger(trigger);
				});
				menuListLayout.on("show", function(){
					menuListLayout.appertizerRegion.show(menuAppertizer);
					menuListLayout.lunchRegion.show(menuLunch);	
					menuListLayout.dinnerRegion.show(menuDinner);
					menuListLayout.desertRegion.show(menuDessert);
						
				});

				layoutApp.mainRegion.show(menuListLayout);
				});
			}
		};
	});
	return layoutApp.MenuApp.List.Controller;
});