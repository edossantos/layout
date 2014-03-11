define(["app", "apps/header/list/list_view"], function(layoutApp, View){
  layoutApp.module("HeaderApp.List", function(List, layoutApp, Backbone, Marionette, $, _){
    List.Controller = {
      listHeader: function(){
        require(["entities/header"], function(){
          var links = layoutApp.request("header:entities");
          var headers = new View.Headers({collection: links});

          headers.on("brand:clicked", function(){
            layoutApp.trigger("contacts:list");
          });

          headers.on("itemview:navigate", function(childView, model){
            var trigger = model.get("navigationTrigger");
           layoutApp.trigger(trigger);
          });

          layoutApp.HeaderRegion.show(headers);
        });
      },

      setActiveHeader: function(headerUrl){
        var links = layoutApp.request("header:entities");
        var headerToSelect = links.find(function(header){ return header.get("url") === headerUrl; });
        headerToSelect.select();
        links.trigger("reset");
      }
    };
  });

  return layoutApp.HeaderApp.List.Controller;
});
