define(["app", "handlebars", "text!apps/home/home/templates/home.html", "bootstrap-slider", "backbone-hammer"]
	, function(layoutApp, Handlebars, homeTpl){
	layoutApp.module("HomeApp.Home.View", function(View, layoutApp, Backbone, Marionette, $, _){
		View.Home = Backbone.Marionette.ItemView.extend({
			today: null,
			open: null,
			className: "container",
			template: Handlebars.compile(homeTpl),
			currentPane: 0, //will hold the current pane
			listeners: {}, //listeners for events
			hammerEvents: {
			    'release': 'release',
				'dragleft': 'drag',
				'dragright': 'drag',
				'swipeleft .dragg': 'swipeeleft',
				'swiperight .dragg': 'swiperight',
				'dragleft .dragg': 'swipeeleft',
				'dragright .dragg': 'swiperight',
				'click #reservation-js a': 'triggerReservation',
				'click #menu-js a': 'triggerMenu',
				'click #about-js a': 'triggerAbout',
				'click #schedule-js a': 'triggerSchedule',
				'click #direction-js a': 'triggerDirection',
				'click #contact-js a': 'triggerContact'
			  },
			  swipeeleft: function(ev){
			  	console.log("left");
			  	ev.gesture.preventDefault();
			    $("#this-carousel-id").carousel('next', "fast");
			  },
			  swiperight: function(ev){
			  	console.log("right");
			  	ev.gesture.preventDefault();
			  	$("#this-carousel-id").carousel('prev', "fast");
			  },
			  
			
			initialize: function(){
				this.setPaneDimensions();
				this.$el.hammer({ drag_lock_to_axis: true });

			},
			setPaneDimensions: function(){
				this.$("ul>li").addClass("animate");
			},
			triggerReservation: function(e){
				e.preventDefault();
				this.trigger("Reservation:clicked");
		
			},
			triggerMenu: function(e){
				e.preventDefault();
				this.trigger("Menus:clicked");
				
			},
			triggerAbout: function(e){
				e.preventDefault();
				this.trigger("About:clicked");
				
			},
			triggerSchedule: function(e){
				e.preventDefault();
				this.trigger("Schedule:clicked");
			},
			triggerDirection: function(e){
				e.preventDefault();
				this.trigger("Direction:clicked");
			},
			triggerContact: function(e){
				e.preventDefault();
				this.trigger("Contact:clicked");
			}
		});

	});
	return layoutApp.HomeApp.Home.View;
});