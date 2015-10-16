/* jshint node: true */
'use strict';

var fs = require('fs');
var path = require('path');

module.exports = {
  name: 'ember-cli-easypiechart',

  included: function(app) {
  	this.app = app;
    this._super.included(app);

    app.import(app.bowerDirectory + '/jquery.easy-pie-chart/dist/jquery.easypiechart.js');
  }
};
