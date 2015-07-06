import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  blurb: DS.attr('string'),
  amazonURL: DS.attr('string'),
  imgURL: DS.attr('string'),
  tags: DS.hasMany('tag', {async: true})

  // ,tagString: Ember.computed('tags', function() {
  //   // SHOULD deliver an array of object, but IS NOT
  //   var tags = this.get('tags');

  //   var str = [];

  //   for(var i = 0; tags.length; i++) {
  //     // need to add in commas & spacing
  //     str.push(tags[i].name);
  //   };
  //   return str;
  // })
});
