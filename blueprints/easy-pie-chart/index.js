module.exports = {
  description: 'Installs easy-pie-chart as a dependency'

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    // https://github.com/rendro/easy-pie-chart
    return this.addBowerPackageToProject('jquery.easy-pie-chart', '2.1.6');
  }
};
