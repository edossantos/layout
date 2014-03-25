define(["app", "handlebars", "text!apps/header/list/templates/list.html", 
			   "text!apps/header/list/templates/list_item.html"], function(layoutApp, Handlebars, listTpl, listItemTpl){
	layoutApp.module("HeaderApp.List.View", function(View, layoutApp, Backbone, Marionette, $, _){
		View.Header = Marionette.ItemView.extend({
			template: Handlebars.compile(listItemTpl),
			tagName: "li",
			events: {
				"click a": "navigate"
			},
			navigate: function(e){
				e.preventDefault();
				$(window).scrollTop(0,0);
				this.trigger("navigate", this.model);
			},
			onRender: function(){
				if(this.model.selected){
					this.$el.addClass("active");
				};
			}
		});
		View.Headers = Marionette.CompositeView.extend({
			template: Handlebars.compile(listTpl),
			className: "container",
			itemView: View.Header,
			itemViewContainer: "ul#main-js",
			events: {
				"click a.brand": "brandClicked",
				"click .nav a": "closeMenu",
				"click .navbar-toggle": "doTransition",
				"click #backgroundPopup": "closeMenu"

				

			},
			initialize: function(){
				 $(window).scroll(function(){
            if ($(window).scrollTop() > 350){
    	        $("#main").addClass("menu-fixed");
    	        
            } else if ($(window).scrollTop() < 350) {
                $("#main").removeClass("menu-fixed ");
               
            }
        });
			},
			brandClicked: function(e){
				e.preventDefault();
				this.trigger("brand:clicked");


			},
			closeMenu: function(e){
				e.preventDefault();
				 if($('.navbar-toggle').css('display') !='none'){
            		$(".navbar-toggle").trigger( "click" );
        		}
        		$("#backgroundPopup").fadeOut("normal");
			},
			doTransition: function(){
				if($("#backgroundPopup").css('display') == 'none'){
					$("#backgroundPopup").css("opacity", "0.7"); 
					$("#backgroundPopup").fadeIn(0001);
				}else{
					$("#backgroundPopup").fadeOut("normal");
				}
			}

		});
	});		   	
	return layoutApp.HeaderApp.List.View;
});