define(["app", "backbone.picky"], function(layoutApp){
  layoutApp.module("Entities", function(Entities, layoutApp, Backbone, Marionette, $, _){
    Entities.Header = Backbone.Model.extend({
      initialize: function(){
        var selectable = new Backbone.Picky.Selectable(this);
        _.extend(this, selectable);
      }
    });

    Entities.HeaderCollection = Backbone.Collection.extend({
      model: Entities.Header,

      initialize: function(){
        var singleSelect = new Backbone.Picky.SingleSelect(this);
        _.extend(this, singleSelect);
      }
    });

    var initializeHeaders = function(){
      Entities.headers = new Entities.HeaderCollection([
        {name: "Home", url: "home", navigationTrigger: "index:layout"},
        {name: "About us", url: "about", navigationTrigger: "about:layout"},
        {name: "Menus", url: "menus", navigationTrigger: "menus:layout"},
        {name: "Reservation", url: "reservation", navigationTrigger: "reservation:layout"},
        {name: "Contact us", url: "contact", navigationTrigger: "contact:layout"}
      ]);
    };

    var API = {
      getHeaders: function(){
        if(Entities.headers === undefined){
         
          initializeHeaders();
        }
        return Entities.headers;
      }
    };

    layoutApp.reqres.setHandler("header:entities", function(){
      return API.getHeaders();
    });
    
  });

  return ;
});
