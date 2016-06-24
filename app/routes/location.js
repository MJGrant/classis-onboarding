import Ember from 'ember';

export default Ember.Route.extend({

  //id was passed in from basics.js, which can be accessed via "param" here
  //use peek all because we don't need to re-get it from the server, the local storage has it already
  model(param) {
    if (param.id) {
      return this.store.peekAll('class').findBy('id', parseInt(param.id));
    }
  },

  setupController(model) {
    let application = this.controllerFor('application');
    application.set('pageTitle', 'Location');

    console.log("saved class came in as:", model);

    var newClass = model;

    console.log("saved class has title:", newClass.get('title'));

    this.controller.set('clientLocation', "yours");
    this.controller.set('address', '');
    this.controller.set('city', '');
  },

  actions: {
    continue() {
      console.log("continuing (updating the class record)");

      //model.set('clientLocation', this.controller.get('clientLocation'));

      //temp: go back to main page
      this.replaceWith('index');
    },

    locationToggled(choice) {
      this.controller.set('clientLocation', choice);
    }

  }



});
