import Ember from 'ember';

export default Ember.Route.extend({

  setupController() {
    this.controller.set('clientLocation', true);
    this.controller.set('pageTitle', 'Location');
  }



});
