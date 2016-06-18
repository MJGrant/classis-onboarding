import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    doButtonThing() {
      this.sendAction('actionToCall');
    }
  }
});
