'use strict';

var fs = require('fs');
var path = require('path');

module.exports = {
    name: require('./package').name,

    included: function(app) {
        this.app = app;
        this._super.included(app);

        //app.import(app.bowerDirectory+ '/jquery/dist/jquery.min.js');
        app.import('node_modules/easy-pie-chart/dist/jquery.easypiechart.min.js');
    }
};
