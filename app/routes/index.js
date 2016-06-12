import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Wy', 'Yummy', 'Luna'];
  },

  setupController() {
    let items = ['Wy', 'Yummy', 'Luna'];
    this.controller.set('items', items);
  }
});
