define(["app", "apps/contact/show/show_view"], function(layoutApp, View){
	layoutApp.module("ContactApp.Contact",function(Contact, layoutApp, Backbone, Marionette, $, _){
		Contact.Controller = {
			showContact: function(){
				var contactView = new View.Contact();
				var directionView = new View.Direction();
				var hoursView = new View.Hours();
				var contactlayout = new View.ContactLayout();
				contactlayout.on("show", function(){
						contactlayout.contactRegion.show(contactView);
						contactlayout.directionRegion.show(directionView);
						contactlayout.hoursRegion.show(hoursView);		
					});
				layoutApp.mainRegion.show(contactlayout);
			}
		};
	});
	return layoutApp.ContactApp.Contact.Controller;
});