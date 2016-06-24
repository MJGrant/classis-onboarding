import Ember from 'ember';

export default Ember.Route.extend({

  model() {
      //classes should already be in data, so just use peek
      return this.store.peekAll('class');
  },

  setupController(controller, model) {
    let application = this.controllerFor('application');
    application.set('pageTitle', 'Classis');

    this.controller.set('classes', model);
  },

  actions: {
    addNew() {
      this.replaceWith('basics');
    }
  }

});
