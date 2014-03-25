define(["app", "handlebars", 
		"text!apps/contact/show/templates/contactLayout.html",
		"text!apps/contact/show/templates/contact.html",
		"text!apps/contact/show/templates/direction.html",
		"text!apps/contact/show/templates/hours.html"], 
		function(layoutApp, Handlebars, contactLayoutTpl, contactTpl, directionTpl, hoursTpl){
	layoutApp.module("ContactApp.Contact.View", function(View, layoutApp, Backbone, Marionette, $, _){
		View.Contact = Backbone.Marionette.ItemView.extend({
			className: "contact",
			template: Handlebars.compile(contactTpl)
		});
		View.Direction = Backbone.Marionette.ItemView.extend({
			className: "direction",
			template: Handlebars.compile(directionTpl)
		});
		View.Hours = Backbone.Marionette.ItemView.extend({
			className: "hours",
			template: Handlebars.compile(hoursTpl)
		});

		View.ContactLayout = Marionette.Layout.extend({
			template: Handlebars.compile(contactLayoutTpl),
			className: "container",
			id: "contact",
			regions: {
				contactRegion: "#contact-region",
				directionRegion: "#direction-region",
				hoursRegion: "#hours-region"
			}

		});

	});
	return layoutApp.ContactApp.Contact.View;
});