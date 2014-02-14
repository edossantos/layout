define(["app"], function(layoutApp){
	layoutApp.module("Entities", function(Entities, layoutApp, Backbone, Marionette, $, _){

		Entities.Menu = Backbone.Model.extend({
			defaults: {
				id: "",
				name: "",
				type: "",
				img: ""
			}

		});
		Entities.MenuCollection = Backbone.Collection.extend({
			model: Entities.Menu
		});
		var menus;
		var initializeMenus = function(){
			menus = new Entities.MenuCollection([
			{id: 1, name: "sushi", type: "fish", img: "img/sushi"},
			{id: 2, name: "meat", type: "meat", img: "img/meat"},
			{id: 3, name: "chicken", type: "meat", img: "img/chicken"}	
			]);

		return menus.models;

		};

		var API = {
			getMenuEntities: function(){
			if(menus === undefined){
				initializeMenus();
			}
			return menus;
			},
			getMenuEntity: function(menuItemId){
				var menus = new Entities.Menu({id: menuItemId});
				menus.fetch();
				return menus;
			}
		};
		layoutApp.reqres.setHandler("menu:entities", function(){
			return API.getMenuEntities();
			
		});
		layoutApp.reqres.setHandler("menu:entity", function(){

			return API.getMenuEntity(id);
			
		});
	});
	return;
});