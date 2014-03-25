define(["marionette", "jquery-ui"], function(Marionette){
  Marionette.Region.Dialog = Marionette.Region.extend({
    onShow: function(view){
      this.listenTo(view, "dialog:close", this.closeDialog);

      var self = this;
      this.$el.dialog({
        modal: true,
        title: view.title,
        width: "auto",
        buttons: {
          "close": function(e , ui){
            self.closeDialog();

          }
        },
        close: function(e, ui){
          self.closeDialog();
        }
      });
    },

    closeDialog: function(){
      this.stopListening();
      this.close();
      this.$el.dialog("destroy");
    }
  });

  return Marionette.Region.Dialog;
});
