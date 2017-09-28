import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('shirt');
  this.route('short');
  this.route('trouser');
  this.route('hoodie');
  this.route('outerwear');
});

export default Router;
