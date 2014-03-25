define(["app"], function(layoutApp){
	layoutApp.module("Entities", function(Entities, layoutApp, Backbone, Marionette, $, _){

		Entities.Menu = Backbone.Model.extend({
			defaults: {
				id: "",
				name: "",
				type: "",
				desc: "",
				img: ""
			}

		});
		Entities.MenuCollection = Backbone.Collection.extend({
			model: Entities.Menu
		});
		var menus;
		var initializeMenus = function(){
			menus = new Entities.MenuCollection([
			{id: 1, name: "CALAMARI", type: "appetizer", desc: "Hand-breaded to order and served with our housemade marinara or spicy Italian pepper and lemon butter sauce", img: "images/menu/appetizer/calamari.jpg"},
			{id: 2, name: "CHICKEN ZUCCHINI FLATBREAD (SEASONAL)", type: "appetizer", desc: "Wood-grilled chicken and zucchini, roasted red bell pepper, mozzarella, romano and goat cheese",img: "images/menu/appetizer/zucchini_flatbread.jpg"},
			{id: 3, name: "BACON & CARAMELIZED ONION FLATBREAD", type: "appetizer", desc: "Slow-cooked caramelized onions, crispy bacon and mozzarella", img: "images/menu/appetizer/bacon-flatbread.jpg"},
			{id: 4, name: "MOZZARELLA MARINARA", type: "appetizer", desc: "Hand-cut and breaded, served with our housemade marinara sauce", img: "images/menu/appetizer/mozzarella.jpg"},
			{id: 5, name: "ZUCCHINI FRITTE", type: "appetizer", desc:"Hand-battered, lightly-fried and served with roasted garlic aioli", img: "images/menu/appetizer/zucchini.jpg"},
			{id: 6, name: "TOMATOES CAPRESE", type: "appetizer", desc:"Fresh milk mozzarella with sliced tomatoes, red onions, fresh basil and a balsamic reduction", img: "images/menu/appetizer/TOMATOES-CAPRESE.jpg"},

			{id: 7, name: "CHICKEN BRYAN", type: "lunch", desc: "Topped with goat cheese, sundried tomatoes, basil and our housemade lemon butter sauce", img: "images/menu/lunch/chicken-bryan.jpg"},
			{id: 8, name: "CHICKEN MARSALA", type: "lunch", desc: "Wood-grilled and topped with mushrooms, prosciutto and our housemade Lombardo Marsala wine sauce",img: "images/menu/lunch/fabio_marsala.jpg"},
			{id: 9, name: "FETTUCCINE CARRABBA", type: "lunch", desc: "Fettuccine Alfredo with wood-grilled chicken, sautéed mushrooms and peas", img: "images/menu/lunch/carrabbaschix.jpg"},
			{id: 10, name: "LOBSTER RAVIOLI", type: "lunch", desc: "Ravioli with tender lobster and romano in our white wine cream sauce, topped with diced roma tomatoes", img: "images/menu/lunch/Bacco_LobsterRavioli1.jpg"},
			{id: 11, name: "FETTUCCINE WEESIE", type: "lunch", desc:"Fettuccine Alfredo with sautéed shrimp, garlic and mushrooms in our housemade white wine lemon butter sauce", img: "images/menu/lunch/FETTUCCINE-WEESIE.jpg"},
			{id: 12, name: "RIGATONI MARTINO", type: "lunch", desc:"Wood-grilled chicken, sautéed mushrooms and sundried tomatoes tossed with rigatoni in our housemade tomato cream sauce", img: "images/menu/lunch/RIGATONI-MARTINO.jpg"},

			{id: 13, name: "SIRLOIN MARSALA", type: "dinner", desc: "Wood-grilled and topped with mushrooms, prosciutto and our housemade Lombardo Marsala wine sauce", img: "images/menu/dinner/sirloinmarsala.jpg"},
			{id: 14, name: "FILET FIORENTINA", type: "dinner", desc: "9oz USDA Choice center-cut tenderloin wood-grilled with our signature grill baste, olive oil and herbs",img: "images/menu/dinner/LA_FIORENTINA.JPG"},
			{id: 15, name: "VEAL MARSALA", type: "dinner", desc: "Sautéed and topped with mushrooms, prosciutto and our housemade Lombardo Marsala wine sauce", img: "images/menu/dinner/veal_marsala.jpg"},
			{id: 16, name: "SPIEDINO DI MARE", type: "dinner", desc: "Shrimp and sea scallops coated with Italian breadcrumbs, wood-grilled and topped with our housemade lemon butter sauce", img: "images/menu/dinner/spiedinodimare.jpg"},
			{id: 17, name: "TILAPIA NOCCIOLA", type: "dinner", desc:"Lightly breaded with hazelnuts, topped with roma tomatoes and our housemade basil lemon butter sauce", img: "images/menu/dinner/TILAPIA-NOCCIOLA.jpg"},
			{id: 18, name: "WOOD-GRILLED SALMON", type: "dinner", desc:"Topped with tomato basil vinaigrette", img: "images/menu/dinner/WOOD-GRILLED-SALMON.jpg"},

			{id: 19, name: "SOGNO DI CIOCCOLATA 'CHOCOLATE DREAM'", type: "dessert", desc: "A rich fudge brownie, with chocolate mousse, fresh whipped cream and homemade chocolate sauce.", img: "images/menu/dessert/dolci.jpg"},
			{id: 20, name: "TIRAMISÚ", type: "dessert", desc: "Lady fingers dipped in liqueur laced espresso, layered with sweetened mascarpone, Myers’s Rum and chocolate shavings",img: "images/menu/dessert/tiramisu.jpg"},
			{id: 21, name: "DESSERT ROSA", type: "dessert", desc: "Delicious butter cake topped with pastry cream, bananas, strawberries, pineapple and whipped cream", img: "images/menu/dessert/Dessert-Rosa.jpg"},
			{id: 22, name: "CHOCOLATE TRUFFLE PIE", type: "dessert", desc: "Dark chocolate cookie crumb crust, a layer of chocolate ganache, with chocolate whipped cream and a drizzle of chocolate and raspberry", img: "images/menu/dessert/chocolate-strawberry-truffle-pie.jpg"}
			
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