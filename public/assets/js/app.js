define(["marionette"], function(Marionette){

	var layoutApp = new Marionette.Application();

	layoutApp.addRegions({
		headerRegion: "#header-region",
		mainRegion: "#main-region",
		footerRegion: "#footer-region"
	});


	///Navigate Backbone History

	layoutApp.navigate = function(route, options){
		options || (options = {});
		Backbone.history.navigate(route, options);
	};
	//getting current route from url
	layoutApp.getCurrentRoute = function(){
		return Backbone.history.fragment;
	}; 

	layoutApp.on("initialize:after", function(){
		console.log("Started");
		//layoutApp.mainRegion.show(IndexView);

		if(Backbone.history){
			//require files app from each app
			require(["apps/index/header/header_app", "apps/index/home/home_app", "apps/index/menu/menu_app"], function(){
			Backbone.history.start();
			if(layoutApp.getCurrentRoute() === ""){
				console.log("index yo");
				//if current route is root of URL trigger index:layout
				layoutApp.trigger("index:layout");
			}else if(layoutApp.getCurrentRoute() === "menu"){
				//else if cuurent route is menu trigger index:menu
				layoutApp.trigger("index:menu");
				console.log("menu from appjs yo");
			}
		});
		}
	});
	return layoutApp;
});
