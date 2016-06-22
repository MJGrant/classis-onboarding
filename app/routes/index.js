import Ember from 'ember';

export default Ember.Route.extend({

  model() {
      return this.store.peekAll('class');
  },

  setupController(model) {
    let application = this.controllerFor('application');
    application.set('pageTitle', 'Classis');

    this.controller.set('classes', model);
  }

});
