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
      console.log("going to location");
      this.replaceWith('location', newClass);
    },

    failure() {
      console.log("failed!");
    },

    continue() {
      console.log("continuing (making a record)");

      var newClass = this.store.createRecord('class', {
        title: this.controller.get('title'),
        description: this.controller.get('description')
      });

      newClass.save()
        .then(() => {
          //go to location and pass along the newly created class's id (for now, Ember generates this id randomly)
          this.replaceWith('location', newClass.get('id'));
        })
        .catch(this.failure);
    }
  }

});
