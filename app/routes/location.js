import Ember from 'ember';

export default Ember.Route.extend({

  setupController() {
    this.controller.set('clientLocation', true);
    let application = this.controllerFor('application');
    application.set('pageTitle', 'Location');
  }



});
