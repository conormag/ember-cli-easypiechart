import Ember from 'ember';
import layout from '../templates/components/easy-pie-chart';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'div',
  percent: 0,
  easyPieChart: null,

  attributeBindings: ['percent:data-percent'],

  didInsertElement: function() {
  	console.log("percent", this.get('percent'));
  	var properties = this.getProperties(
  		'barColor', 'trackColor', 'scaleColor', 
  		'lineCap', 'lineWidth' , 'size' ,
  		'animate', 'onStart', 'onStop', 'onStep'
  		);


  	var easyPieChart = this.$().easyPieChart(properties);

  	this.set('easyPieChart', easyPieChart);
  },

	updatePercent: Ember.observer('percent', function(){
		var percent = this.get('percent');
		this.get('easyPieChart').data('easyPieChart').update(percent);
	})
});
