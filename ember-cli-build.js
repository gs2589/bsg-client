/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import("vendor/css/bootstrap.min.css");
  app.import("vendor/css/font-awesome.min.css");
  app.import("vendor/css/jquery.gritter.css");
  app.import("vendor/css/less-style.css");
  app.import("vendor/css/style.css");

  app.import("vendor/js/jquery.js");
  app.import("vendor/js/bootstrap.min.js");
  app.import("vendor/js/jquery-ui.min.js");
  app.import("vendor/js/bootstrap-datetimepicker.min.js");
  app.import("vendor/js/wysihtml5-0.3.0.js");
  app.import("vendor/js/prettify.js");
  app.import("vendor/js/bootstrap-wysihtml5.min.js");
  app.import("vendor/js/jquery.validate.js");
  app.import("vendor/js/jquery.steps.min.js");
  app.import("vendor/js/jquery.knob.js");
  app.import("vendor/js/jquery.slimscroll.min.js");
  app.import("vendor/js/jquery.dataTables.min.js");
  app.import("vendor/js/jquery.prettyPhoto.js");
  app.import("vendor/js/jquery.rateit.min.js");
  app.import("vendor/js/moment.min.js");
  app.import("vendor/js/fullcalendar.min.js");
  app.import("vendor/js/jquery.gritter.min.js");
  app.import("vendor/js/custom.notification.js");
  app.import("vendor/js/respond.min.js");
  app.import("vendor/js/html5shiv.js");
  app.import("vendor/js/custom.js");

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
