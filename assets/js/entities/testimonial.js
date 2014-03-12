define(["app"], function(layoutApp){
	layoutApp.module("Entities", function(Entities, layoutApp, Backbone, Marionette, $, _){

		Entities.Testimonial = Backbone.Model.extend({
			defaults: {
				id: "",
				name: "",
				testimonial: "",
				date: ""
			}

		});
		Entities.TestimonialCollection = Backbone.Collection.extend({
			model: Entities.Testimonial
		});
		var testimonials;
		var initializeTestimonials = function(){
			testimonials = new Entities.TestimonialCollection([
			{id: 1, name: "Shelly and Rome", testimonial: "Friends from Utica recommended name Restaurant, so we drove down one evening for dinner. We can't say enough good things about our experience. The food was delicious, portions generous, and the price was outstanding. Now we recommend the restaurant to our friends and family.", date: "04/22/2013"},
			{id: 2, name: "Jacquie", testimonial: "Hello! I just wanted to give a huge thank you to both of you for helping make tonight special! All my friends LOVED the food, it was amazing :) They thought everyone was helpful and simply fantastic, so thanks so much for helping make this a great night (better than a few years ago, haha).Thanks again!", date: "06/16/2013"},
			{id: 3, name: "Edjann and Maria", testimonial: "The feedback that I received back from Larry was awesome! He said that the service & food were great. They couldn’t have asked for better. Please thank all those who made this a wonderful experience for our Haworth Team. And as always, you are a pleasure to work with! Thanks again,", date: "01/11/2014"},
			{id: 4, name: "Carlos", testimonial: "I am a HUGE and loyal fan of your pasta sauces and after having them will not eat anything else on my pasta. My favorite part of the meal is eating the sauce right out of the jar after I open it. I simply love it! I even have my parents in Rhode Island hooked and they stock up every time they come to visit to bring back to RI (and there are plenty of Italian restaurants in RI!)", date: "03/22/2013"}
			
			
			
			]);

		return testimonials.models;

		};

		var API = {
			getTestimonialEntities: function(){
			if( testimonials === undefined){
				initializeTestimonials();
			}
			return testimonials;
			},
			getTestimonialEntity: function(testimonialItemId){
				var estimonials = new Entities.Testimonial({id: testimonialItemId});
				testimonials.fetch();
				return testimonials;
			}
		};
		layoutApp.reqres.setHandler("testimonial:entities", function(){
			return API.getTestimonialEntities();
			
		});
		layoutApp.reqres.setHandler("testimonial:entity", function(){

			return API.getTestimonialEntity(id);
			
		});
	});
	return;
});