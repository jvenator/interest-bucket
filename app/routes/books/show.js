import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete: function(book) {
      var _this = this;
      book.destroyRecord().then(function() {
        _this.transitionTo('books.index');
      });
    }
  }
});
