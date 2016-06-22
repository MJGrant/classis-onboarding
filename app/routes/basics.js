import Ember from 'ember';

export default Ember.Route.extend({

  setupController() {
    let application = this.controllerFor('application');
    application.set('pageTitle', 'Basics');

    this.controller.set('title', '');
    this.controller.set('description', '');
  },

  actions: {
    transitionToNext(newClass) {
      this.replaceWith('location', newClass);
    },

    failure() {
      console.log("failed!");
    },

    continue() {
      console.log("continuing to location");
      var newClass = this.store.createRecord('class', {
        title: this.controller.get('title'),
        description: this.controller.get('description')
      });

      newClass.save().then(this.transitionToNext).catch(this.failure);
    }
  }

});
