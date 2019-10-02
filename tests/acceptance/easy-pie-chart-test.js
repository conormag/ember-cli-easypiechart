import { click, fillIn, visit } from '@ember/test-helpers';
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

test('changing component value updates plugin', async function(assert) {
  assert.expect(1);

  await visit('/');

  await fillIn("#newval","55");
  await click("#submitpc");
  var blockComponent = $("#block");
  assert.equal(blockComponent.text().trim(), '55%');
});
