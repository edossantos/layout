define(["app", "text!apps/index/template/menu.html"],
	 function(layoutApp, menuTpl){
	layoutApp.module("MenuApp.Menu.View", function(View, layoutApp, Backbone, Marionette, $, _){

		View.Menu = Marionette.ItemView.extend({
			template: _.template(menuTpl),
			events: {
				"click": "highlight",
				"click a": "filter"
			},
			highlight: function(e){
				e.preventDefault();
				this.$el.toggleClass("Warning");
			},

			filter: function(id){
				
				require(["apps/index/menu/menu_controller"], function(MenuController){
						MenuController.showMenu(id);
						
					});
			}
		});
		View.Menus = Marionette.CollectionView.extend({
			tagName: "ul",
			itemView: View.Menu
			
		});
	});
	return layoutApp.MenuApp.Menu.View;
});