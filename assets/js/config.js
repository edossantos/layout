requirejs.config({
  baseUrl: "assets/js",
  paths: {
    jquery: "vendor/jquery",
    backbone: "vendor/backbone",
    "backbone.picky": "vendor/backbone.picky",
    "backbone.syphon": "vendor/backbone.syphon",
    "jquery-ui": "vendor/jquery-ui",
    marionette: "vendor/backbone.marionette",
    json2: "vendor/json2",
    underscore: "vendor/underscore",
    text: "vendor/text",
    bootstrap: "vendor/bootstrap.min",
    handlebars: "vendor/handlebars",
    ifconfhelper: "helpers/ifconf",
    "jssor-core": "vendor/jssor.core",
    "jssor-slider": "vendor/jssor.slider",
    "jssor-utils": "vendor/jssor.utils",
    modernizr: "vendor/modernizr",
    "hammer": "vendor/hammer",
    "jquery-hammer": "vendor/jquery.hammer",
    "backbone-hammer": "vendor/backbone.hammer",
    "picker-legacy": "vendor/legacy",
    "picker": "vendor/picker",
    "pickerDate": "vendor/picker.date",
    "pickerTime": "vendor/picker.time",
    "main-picker": "vendor/main"
  },

  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["jquery", "underscore", "json2"],
      exports: "Backbone"
    },
    "backbone.picky": ["backbone"],
    "backbone.syphon": ["backbone"],
    "marionette": {
      deps: ["backbone"],
      exports: "Marionette"
    },
    "jquery-ui": ["jquery"],
    bootstrap: {
      deps: ["jquery"]
    },

    handlebars: {
      exports: "Handlebars"
    },
    "picker": ["jquery", "picker-legacy"],
    "pickerDate": {
        deps: ["jquery", "picker"],
        exports: "pickadate"
    },
    "pickerTime": {
        deps: ["jquery", "picker"],
        exports: "pickatime"
    }
  }
});

require(["app", "bootstrap", "apps/header/header_app", "apps/footer/footer_app"], function(layoutApp){
  layoutApp.start();

});