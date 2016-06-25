import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    id: {refreshModel: true}
  },

  model(param) {
    console.log("what's in model param?", param);
    //if id is present, we're editing an existing class
    if (param.id) {
      return this.store.peek('class').findBy(param.id);
    }
  },

  setupController(controller, model) {
    let application = this.controllerFor('application');
    application.set('pageTitle', 'Basics');

    this.controller.set('title', '');
    this.controller.set('description', '');

    console.log("we have some model stuff:", model);

    //may not need this
    this.controller.setProperties({
      queryParams: ['id']
    });

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
