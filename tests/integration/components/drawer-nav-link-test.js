import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('drawer-nav-link', 'Integration | Component | drawer nav link', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{drawer-nav-link}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#drawer-nav-link}}
      template block text
    {{/drawer-nav-link}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
