requirejs.config({
  baseUrl: "assets/js",
  paths: {
    jquery: "vendor/jquery2",
    backbone: "vendor/backbone",
    "backbone.picky": "vendor/backbone.picky",
    "backbone.syphon": "vendor/backbone.syphon",
    marionette: "vendor/backbone.marionette",
    "jquery-ui": "vendor/jquery-ui",
    "hammerjs": "vendor/hammer",
    "hammer.jquery": "vendor/jquery.hammer",
    "backbone-hammer": "vendor/backbone.hammer",
    "bootstrap-slider": "vendor/bootstrap-slider",
    json2: "vendor/json2",
    underscore: "vendor/underscore",
    text: "vendor/text",
    bootstrap: "vendor/bootstrap.min",
    handlebars: "vendor/handlebars",
    ifconfhelper: "helpers/ifconf",
    modernizr: "vendor/modernizr",
    "picker-legacy": "vendor/legacy",
    "picker": "vendor/picker",
    "pickerDate": "vendor/picker.date",
    "pickerTime": "vendor/picker.time",
    "main-picker": "vendor/main",
    "less": "vendor/less"
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
    },
    hammerjs: {
      exports: "hammer"
    },
    "hammer.jquery": {
      deps: ["jquery"]
    },
    "backbone-hammer": {
      deps: ["hammer.jquery", "jquery", "hammerjs"]
    }


  }
});

require(["app", "less", "bootstrap", "apps/header/header_app", "apps/footer/footer_app", "backbone-hammer"], function(layoutApp){
  layoutApp.start();
});