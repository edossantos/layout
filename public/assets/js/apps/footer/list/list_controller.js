define(["app", "apps/footer/list/list_view"], function(layoutApp, View){
  layoutApp.module("FooterApp.List", function(List, layoutApp, Backbone, Marionette, $, _){
    List.Controller = {
      listFooter: function(){
        
         
          var footer = new View.Footer();

          footer.on("brand:clicked", function(){
            layoutApp.trigger("contacts:list");
          });

          footer.on("itemview:navigate", function(childView, model){
            var trigger = model.get("navigationTrigger");
           layoutApp.trigger(trigger);
          });

          layoutApp.FooterRegion.show(footer);
        
      }
    };
  });

  return layoutApp.FooterApp.List.Controller;
});
