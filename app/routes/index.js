import Ember from 'ember';

export default Ember.Route.extend({

  model() {
      this.store.findRecord('class');
  },
  
  setupController() {
    let application = this.controllerFor('application');
    application.set('pageTitle', 'Classis');
  }

});
