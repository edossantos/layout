define(["app", "text!apps/index/template/header.html", "text!apps/index/template/headers.html"],
	 function(layoutApp, HeaderTpl, HeadersTpl){
	layoutApp.module("HeaderApp.List.View", function(View, layoutApp, Backbone, Marionette, $, _){
		View.Header = Marionette.ItemView.extend({
			template: _.template(HeadersTpl),
			tagName: "li",
			 events: {
			 	"click a": "navigate",
			 	
			},
			navigate: function(e){
				e.preventDefault();
				this.trigger("navigate", this.model);

                 
			},
			onRender: function(){
				
				if(this.model.selected){
					this.$el.addClass("active");
				}
			}
			
		});
		View.Headers = Marionette.CompositeView.extend({
			className: "container",
			template: _.template(HeaderTpl),
			itemView: View.Header,
			itemViewContainer: "ul.nav.navbar-nav",
			events: {
				"click a.brand": "brandClicked"
			},
			brandClicked: function(e){
				e.preventDefault();
				this.trigger("brand:clicked");

			}
		});
		
	});
	return layoutApp.HeaderApp.List.View;
});