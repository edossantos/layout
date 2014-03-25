define(["app", "handlebars",
		"text!apps/about/show/templates/aboutLayout.html",
		"text!apps/about/show/templates/about.html",
		"text!apps/about/show/templates/testimonials.html",
		"text!apps/about/show/templates/testimonial.html"]
		,function(layoutApp, Handlebars, aboutLayoutTpl, aboutTpl, testimonialsTpl, testimonialTpl){
	layoutApp.module("AboutApp.About.View", function(View, layoutApp, Backbone, Marionette, $, _){
		View.About = Backbone.Marionette.ItemView.extend({
			className: "about",
			template: Handlebars.compile(aboutTpl)
		});
		View.Testimonial = Marionette.ItemView.extend({
			tagName: "li",
			template: Handlebars.compile(testimonialTpl)
		});
		View.Testimonials = Marionette.CompositeView.extend({
			template: Handlebars.compile(testimonialsTpl),
			className: "about-test",
			itemView: View.Testimonial,
			itemViewContainer: "ul#testimonial-list"
		});



		View.AboutLayout = Marionette.Layout.extend({
			template: Handlebars.compile(aboutLayoutTpl),
			className: "container",
			id: "about",
			regions: {
				testimonialRegion: "#testimonial-region",
				aboutRegion: "#about-region"
			}
		});
	});
	return layoutApp.AboutApp.About.View;
});