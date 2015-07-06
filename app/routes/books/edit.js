import Ember from 'ember';

export default Ember.Route.extend({
  actions: {

    addTag: function() {
      var newTagName = this.controllerFor(this.routeName).get('newTagName');
      // var newTagName = "fiction";
      var book = this.modelFor(this.routeName);
      var tag = this.store.createRecord('tag', {
        name: newTagName,
        book: book
      });

      tag.save().then(function(tag) {
        book.get('tags').addObject(tag);
        book.save();
      });
      // TODO: SHOULD CLEAR NEW TAG FORM FIELD ON SUCCESS
    },

    removeTag: function(tag) {
      var book = this.modelFor(this.routeName);
      this.store.find('tag', tag.id).then(function(tag) {
        book.get('tags').removeObject(tag);
        book.save();
      });
      // tag.destroyRecord();
    }
  }
});
