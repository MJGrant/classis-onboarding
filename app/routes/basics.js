import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    id: {refreshModel: true}
  },

  //queryParams are contained inside transition, which has to be passed as the 2nd paramter to model
  model(param, transition) {
    //if id is present, we're editing an existing class
    let id = transition.queryParams.id;
    if (id) {
      return this.store.peekRecord('class', id);
    }
  },

  setupController(controller, model) {
    console.log("model has:", model);
    let application = this.controllerFor('application');
    application.set('pageTitle', 'Basics');

    if (model) {
      //we're editing an existing one
      this.controller.set('title', model.get('title'));
      this.controller.set('description', model.get('description'));
    } else {
      //this is a new class
      this.controller.set('title', '');
      this.controller.set('description', '');
    }


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
