import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findRecord('class', 1);
  },

  setupController(model) {
    let application = this.controllerFor('application');
    application.set('pageTitle', 'Location');

    this.controller.set('clientLocation', model.get('clientLocation'));
  },

  actions: {
    continue() {
      console.log("back to index");

      model.set('clientLocation', this.controller.get('clientLocation'));

      //advance to location route
      this.replaceWith('location');
    }
  }



});
