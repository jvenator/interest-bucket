import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('books', function() {
    this.route('new');
    this.route('show', { path: ':book_id' });
    this.route('edit', { path: ':book_id/edit' });
  });
  this.route('tags');
  this.route('login');
  this.route('logout');
});

export default Router;
