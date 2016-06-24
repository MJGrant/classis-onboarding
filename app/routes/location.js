import Ember from 'ember';

export default Ember.Route.extend({

  //id was passed in from basics.js, which can be accessed via "param" here
  //use peek all because we don't need to re-get it from the server, the local storage has it already
  model(param) {
    if (param.id) {
      let newClass = this.store.peekRecord('class', param.id);
      return newClass;
    }
  },

  setupController(controller, model) {
    let application = this.controllerFor('application');
    application.set('pageTitle', 'Location');

    //put the model on the controller so we can get at it from the actions
    this.controller.set('newClass', model);

    this.controller.set('clientLocation', "yours");
    this.controller.set('address', '');
    this.controller.set('city', '');
  },

  actions: {
    continue() {
      console.log("continuing (updating the class record)");

      let newClass = this.controller.get('newClass');
      newClass.set('clientLocation', this.controller.get('clientLocation'));
      newClass.set('address', this.controller.get('address'));
      newClass.set('city', this.controller.get('city'));

      //temp: go back to main page
      this.replaceWith('index');
    },

    locationToggled(choice) {
      this.controller.set('clientLocation', choice);
    }

  }



});
