define(["marionette"], function(Marionette){

	var layoutApp = new Marionette.Application();
	//adding effect to the view change, fadeIn "slow"
	Marionette.Region.prototype.open = function(view){
	  $(window).scrollTop();
	  this.$el.hide();
	  this.$el.html(view.el);
	  this.$el.fadeIn( "slow", "linear" );
	}
	
	layoutApp.addRegions({
		HeaderRegion: "#header-region",
		mainRegion: "#main-region",
		FooterRegion: "#footer-region"
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

	layoutApp.startSubApp = function(appName, args){
    var currentApp = appName ? layoutApp.module(appName) : null;
    if (layoutApp.currentApp === currentApp){ return; }

    if (layoutApp.currentApp){
      layoutApp.currentApp.stop();
    }

    layoutApp.currentApp = currentApp;
    if(currentApp){
      currentApp.start(args);
    }
  };

	layoutApp.on("initialize:after", function(){
		console.log("Started");
		//layoutApp.mainRegion.show(IndexView);

		 if(Backbone.history){
		 	//require files app from each app
		 	require(["apps/home/home_app", "apps/about/about_app", "apps/menu/menu_app", "apps/reservation/reservation_app"]
		 	, function(){
		 	Backbone.history.start();
		 	if(layoutApp.getCurrentRoute() === ""){
		 		console.log("index yo");
		 		//if current route is root of URL trigger index:layout
		 		layoutApp.trigger("index:layout");
		 		}else if(layoutApp.getCurrentRoute() === "about"){
		 		//else if current route is about trigger about:layout
		 		layoutApp.trigger("about:layout");
	 			}else if(layoutApp.getCurrentRoute() === "menus"){
	 				layoutApp.trigger("menus:layout");
	 			}else if(layoutApp.getCurrentRoute() === "reservation"){
	 				layoutApp.trigger("reservation:layout");
	 			}
		 });
		 }
	});
	return layoutApp;
});
