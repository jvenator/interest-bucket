import Ember from 'ember';

export default Ember.Route.extend({

  // model: function() {
  //   return Ember.RSVP.hash({
  //       allTags: this.store.findAll('tag')
  //   });
  // },

  setupController: function(controller, model) {
    this._super(controller,model);
    var allTags = DS.PromiseArray.create({
      promise: this.store.find('tag')
    });
    allTags.then(function() {
      controller.set('allTags', allTags)
    });
  },

  actions: {

    addNewTag: function() {
      var newTagName = this.controllerFor(this.routeName).get('newTagName');
      var book = this.modelFor(this.routeName);
      var tag = this.store.createRecord('tag', {
        name: newTagName,
        book: book
      });

      var _this = this;

      tag.save().then(function(tag) {
        book.get('tags').addObject(tag);
        book.save();
        _this.controller.set('newTagName', '');
      });
      // TODO: SHOULD CLEAR NEW TAG FORM FIELD ON SUCCESS
    },

    addExistingTag: function(tag) {
      var book = this.modelFor(this.routeName);
      book.get('tags').addObject(tag);
      book.save();
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
