define(["app", "handlebars","text!apps/dialog/templates/dialog.html"],
       function(layoutApp, Handlebars, dialogTpl){
  layoutApp.module("DialogApp.Views", function(Views, layoutApp, Backbone, Marionette, $, _){
    Views.Menu = Marionette.ItemView.extend({
      template: Handlebars.compile(dialogTpl),
      initialize: function(){
        this.title = this.model.get("name");
      },
      events: {
        "click #close-dialog": "closedialog"
      },
      closedialog: function(e){
        e.preventDefault();
        require(["config/marionette-regions/dialog"], function(closeDialog){
          console.log("close");
          closeDialog.trigger("dialog:close");
        });
      }
    });
  });

  return layoutApp.DialogApp.Views;
});
