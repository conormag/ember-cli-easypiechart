import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | easy pie chart', {
    beforeEach: function() {
        this.application = startApp();
    },

    afterEach: function() {
        Ember.run(this.application, 'destroy');
    }
});

test('changing component value updates plugin', function(assert) {
    assert.expect(1);

    visit('/');

    andThen(function() {
        fillIn("#newval", "55");
        click("#submitpc");
    });

    andThen(function() {
        var blockComponent = Ember.$("#block");
        assert.equal(blockComponent.text().trim(), '55%');
    });
});