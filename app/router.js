import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('toots');
  this.route('login');
  this.route('users');
  
  this.route('toot.new', { path: 'toots/new' });
});

export default Router;
