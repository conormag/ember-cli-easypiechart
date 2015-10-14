import Ember from 'ember';
import layout from '../templates/components/easy-pie-chart';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'div',

  percent: 0,
  easyPie: undefined,
  barColor: '#ef1e25',
  trackColor: '#f2f2f2',
  scaleColor: '#dfe0e0',
  lineCap: 'round',
  lineWidth: '3',
  size: '110',
  animate: false,

  attributeBindings: ['percent:data-percent'],

  initialize: Ember.on('didInsertElement', function() {
    let properties = this.getProperties(
      'barColor', 'trackColor', 'scaleColor', 
      'lineCap', 'lineWidth' , 'size' ,
      'animate' 
      //,'onStart', 'onStop', 'onStep'
      );
    //console.log(JSON.stringify(properties));

    let easyPieChart = this.$().easyPieChart(properties);

    this.set('easyPie', easyPieChart);
  }),

  updatePercent: Ember.observer('percent', function(){
    var percent = this.get('percent');
    this.get('easyPie').data('easyPieChart').update(percent);
  })
});
