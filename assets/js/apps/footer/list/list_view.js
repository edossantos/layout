define(["app", "text!apps/footer/list/templates/list.html", 
			   "text!apps/footer/list/templates/list_item.html"], function(layoutApp, listTpl, listItemTpl){
	layoutApp.module("FooterApp.List.View", function(View, layoutApp, Backbone, Marionette, $, _){
		View.Footer = Marionette.ItemView.extend({
			template: _.template(listTpl),
			className: "container footer-style",
			events: {
				"click #social-network a": "navigate",
				"submit form": "formSubmit"
			},
			navigate: function(e){
				e.preventDefault();
				this.trigger("navigate", this.model);
			},
			formSubmit: function(e){
				e.preventDefault();
				console.log("subscribe to our weekly Newsletter");
			}
		});
	
	});		   	
	return layoutApp.FooterApp.List.View;
});