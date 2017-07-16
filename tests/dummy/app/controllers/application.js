import Ember from 'ember';

export default Ember.Controller.extend({

    percent: 0,
    percent1: 0,
    animationOn: true,
    newpercent: 10,

    onStep: function(from, to, value) {
        Ember.$(this.el).find('span').text(~~value);
    },

    actions: {
        updatePercent: function() {
            var x = this.get("newpercent");
            this.set('percent', x);
            this.set('percent1', x);
        },
        toggleAnimation: function() {
            this.set('animationOn', !this.get('animationOn'));
        }
    }
});