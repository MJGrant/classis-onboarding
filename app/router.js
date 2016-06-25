import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('basics', {queryParams: 'id'});
  this.route('location', {path: 'location/:id'});
  this.route('main');
});

export default Router;
