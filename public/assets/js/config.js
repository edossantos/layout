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
    "jssor-core": "vendor/jssor.core",
    "jssor-slider": "vendor/jssor.slider",
    "jssor-utils": "vendor/jssor.utils"
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
    }
  }
});

require(["app", "bootstrap"], function(layoutApp){
  layoutApp.start();
});