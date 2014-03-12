define(["app", "apps/about/show/show_view"], function(layoutApp, View){
	layoutApp.module("AboutApp.About", function(About, layoutApp, Backbone, Marionette, $, _){
		About.Controller = {
			showAbout: function(){
				require(["entities/testimonial"], function(){
					var testimonialList = layoutApp.request("testimonial:entities");
					var aboutView = new View.About();
					var testimonialView = new View.Testimonials({collection: testimonialList});
					var aboutlayout = new View.AboutLayout();

					aboutlayout.on("show", function(){
						aboutlayout.testimonialRegion.show(testimonialView);
						aboutlayout.aboutRegion.show(aboutView);	
					});

					layoutApp.mainRegion.show(aboutlayout);
				});
			}

		};
	});
	return layoutApp.AboutApp.About.Controller;
});