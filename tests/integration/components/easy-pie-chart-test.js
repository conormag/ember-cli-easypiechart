import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | easy pie chart', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{easy-pie-chart}}`);

    assert.equal(find('*').textContent.trim(), '0%');

    // Template block usage:
    await render(hbs`
      {{#easy-pie-chart}}
        template block text
      {{/easy-pie-chart}}
    `);

    assert.equal(find('*').textContent.trim(), 'template block text');
  });
});

