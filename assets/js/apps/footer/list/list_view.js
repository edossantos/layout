define(["app", "handlebars","text!apps/footer/list/templates/list.html", 
			   "text!apps/footer/list/templates/list_item.html"], function(layoutApp, Handlebar, listTpl, listItemTpl){
	layoutApp.module("FooterApp.List.View", function(View, layoutApp, Backbone, Marionette, $, _){
		View.Footer = Marionette.ItemView.extend({
			template: Handlebars.compile(listTpl),
			className: "container footer-style",
			events: {
				"click #social-network a": "navigate",
				"submit form": "formSubmit",
				"click .to-top": "scrollPageTop"
			},
			navigate: function(e){
				e.preventDefault();
				this.trigger("navigate", this.model);
			},
			formSubmit: function(e){
				e.preventDefault();
				console.log("subscribe to our weekly Newsletter");
			},
			scrollPageTop: function(e){
				e.preventDefault;
				$('html,body').animate({scrollTop:0},1000);
    
			}
		});
	
	});		   	
	return layoutApp.FooterApp.List.View;
});