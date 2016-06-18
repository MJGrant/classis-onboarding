import Ember from 'ember';

export default Ember.Route.extend({

  setupController() {
    let application = this.controllerFor('application');
    application.set('pageTitle', 'Basics');

    this.controller.set('title', '');
    this.controller.set('description', '');
  },

  actions: {
    continue() {
      console.log("continuing on to location and making a record");
/*
      this.store.createRecord('class', {
        title: this.controller.get('title'),
        description: this.controller.get('description')
      });
      */

      //advance to location route
      this.replaceWith('location');
    }
  }

});
