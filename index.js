/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-easypiechart',

  included: function(app) {
    this._super.included(app);
    app.import(path.join(app.bowerDirectory, '/jquery.easy-pie-chart/dist/jquery.easypiechart.js'));
  }
};
