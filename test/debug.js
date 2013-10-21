// script for local debugging of the generated project
// run with:
//     node debug/test.js
// or
//     npm run-script debug
// generate project into the ../debug folder.

var path = require('path');
var helpers = require('yeoman-generator').test;

helpers.testDirectory(path.join(__dirname, '..', 'debug'), function(err) {
  if(err) {
    return done(err);
  }

  this.webapp = helpers.createGenerator('skylark:app', [
    '../app', [
      helpers.createDummyGenerator(),
      'mocha:app'
    ]
  ]);

  this.webapp.run({}, function() {});

  }.bind(this));

