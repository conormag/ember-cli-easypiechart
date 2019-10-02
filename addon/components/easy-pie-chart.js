import Ember from 'ember';
import layout from '../templates/components/easy-pie-chart';

const { on, observer} = Ember;

export default Ember.Component.extend({
  layout: layout,
  tagName: 'div',

  attributeBindings: ['percent:data-percent'],
  classNames: ['easyPieChart'],
  percent: 0,
  newpercent:15,
  easyPieChart: undefined,
  animationOn: true,
  symbol: "%",


  initialize: on('didInsertElement', function() {
    let properties = this.getProperties(
      'barColor', 'trackColor', 'scaleColor', 'scaleLength',
      'lineCap', 'lineWidth' , 'trackWidth', 'size', 'rotate',
      'animate', 'easing', 'onStart', 'onStop', 'onStep'
      );

    let easyPieChart = this.element.addEventListener(properties);

    this.set('easyPieChart', easyPieChart);
  }),

  updatePercent: observer('percent', function(){
    let percent = this.get('percent') || 0;
    this.get('easyPieChart').data('easyPieChart').update(percent);
  }),

  toggleAnimation: observer('animationOn', function() {
    let isEnabled = this.get('animationOn');
    if (isEnabled) {
      this.get('easyPieChart').data('easyPieChart').enableAnimation();
    } else {
      this.get('easyPieChart').data('easyPieChart').disableAnimation();
    }
  }),

  destroyEasyPieChart: on('willDestroyElement', function() {
    this.destroy();
  }),
});
