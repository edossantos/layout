define(["app", "handlebars",
		"text!apps/menu/list/templates/menuLayout.html",
		"text!apps/menu/list/templates/menuAppertizer.html",
		"text!apps/menu/list/templates/menuAppertizerItem.html", 
		"text!apps/menu/list/templates/menuLunch.html",
		"text!apps/menu/list/templates/menuLunchItem.html",
		"text!apps/menu/list/templates/menuDinner.html",
		"text!apps/menu/list/templates/menuDinnerItem.html",
		"text!apps/menu/list/templates/menuDessert.html",
		"text!apps/menu/list/templates/menuDessertItem.html",
		"ifconfhelper"
		]
	, function(layoutApp, Handlebars, 
				menuLayoutTpl, menuAppertizerTpl, 
				menuAppertizerItemTpl, menuLunchTpl, 
				menuLunchItemTpl, menuDinnerTpl, 
				menuDinnerItemTpl, menuDessertTpl, menuDessertItemTpl){
		layoutApp.module("MenuApp.List.View", function(View, layoutApp, Backbone, Marionette, $, _){
			//Appertizer Menu
			View.MenuAppertizer = Marionette.ItemView.extend({
				template: Handlebars.compile(menuAppertizerItemTpl),
				tagName: "li", 
				events: {
					"click a": "showDialogMenu"
				},
				showDialogMenu: function(e){
					e.preventDefault();
					e.stopPropagation();
					console.log(this.model);
        			this.trigger("menu:show", this.model);
				}
			});
			View.MenuAppertizerList = Marionette.CompositeView.extend({
				template: Handlebars.compile(menuAppertizerTpl),
				itemView: View.MenuAppertizer,
				itemViewContainer: "ul#appertizerList"

			});
			//end of Appertizer Menu
			
			//Lunch Menu
			View.MenuLunch = Marionette.ItemView.extend({
				template: Handlebars.compile(menuLunchItemTpl),
				tagName: "li",
				events: {
					"click a": "showDialogMenu"
				},
				showDialogMenu: function(e){
					e.preventDefault();
					e.stopPropagation();
					console.log(this.model);
        			this.trigger("menu:show", this.model);
				}
			});
			View.MenuLunchList = Marionette.CompositeView.extend({
				template: Handlebars.compile(menuLunchTpl),
				itemView: View.MenuLunch,
				itemViewContainer: "ul#lunchList"

			});
			//end of Lunch Menu

			//Dinner Menu
			View.MenuDinner = Marionette.ItemView.extend({
				template: Handlebars.compile(menuDinnerItemTpl),
				tagName: "li",
				events: {
					"click a": "showDialogMenu"
				},
				showDialogMenu: function(e){
					e.preventDefault();
					e.stopPropagation();
					console.log(this.model);
        			this.trigger("menu:show", this.model);
				}
			});
			View.MenuDinnerList = Marionette.CompositeView.extend({
				template: Handlebars.compile(menuDinnerTpl),
				itemView: View.MenuDinner,
				itemViewContainer: "ul#dinnerList"

			});
			//end of Dinner Menu

			//Desert Menu
			View.MenuDessert = Marionette.ItemView.extend({
				template: Handlebars.compile(menuDessertItemTpl),
				tagName: "li",
				events: {
					"click a": "showDialogMenu"
				},
				showDialogMenu: function(e){
					e.preventDefault();
					e.stopPropagation();
					console.log(this.model);
        			this.trigger("menu:show", this.model);
				}
			});
			View.MenuDessertList = Marionette.CompositeView.extend({
				template: Handlebars.compile(menuDessertTpl),
				itemView: View.MenuDessert,
				itemViewContainer: "ul#dessertList"

			});
			//end of Dinner Menu
			

			//Menu layout with all the regions for the menu
			View.MenuLayout = Marionette.Layout.extend({
				template: Handlebars.compile(menuLayoutTpl),
				className: "container",
				id: "menu",
				regions: {
					appertizerRegion: "#appertizerMenu",
					lunchRegion: "#lunchMenu",
					dinnerRegion: "#dinnerMenu",
					desertRegion: "#desertMenu"
				}
			});
			//end of menu layout
		});
		return layoutApp.MenuApp.List.View;
	});