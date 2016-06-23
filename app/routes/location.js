import Ember from 'ember';

export default Ember.Route.extend({

  setupController() {
    let application = this.controllerFor('application');
    application.set('pageTitle', 'Location');

    this.controller.set('clientLocation', "yours");
  },

  actions: {
    continue() {
      console.log("back to index");

      //model.set('clientLocation', this.controller.get('clientLocation'));

      //advance to location route
      this.replaceWith('location');
    },

    locationToggled(choice) {
      this.controller.set('clientLocation', choice);
    }

  }



});
