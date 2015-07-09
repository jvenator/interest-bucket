import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  blurb: DS.attr('string'),
  amazonURL: DS.attr('string'),
  imgURL: DS.attr('string'),
  tags: DS.hasMany('tag', {async: true}),

  tagString: function(k, v) {

    if (arguments.length > 1) {
      // if args count above is > 1 it implies we are setting the value
      // and should simply return the value for v
      return v;
    } else {

      // give ourselves access to this via local scoped variable _this
      var _this = this;
      // since we are not setting a value for v (just reading from data store)
      // we first set v equal to null
      v = null;

      // now we make the get request to which returns a promis
      this.get('tags').
        // we take the results use .then() to operate on it further
        then(function(tags) {
          // create an array of the available result objects based
          // on a specific key and return the value to be operated on further
          return tags.mapBy('name');
        }).
        then(function(tagArray) {
          // create a variable since we need to set two different values with it
          var str = tagArray.join(', ');
          // first, when the .then() promise is resolve we set the property via
          // the _this variable we previously created
          _this.set('tagString', str);
          // in the event that the promise resolves immediately, we set the
          // value of v so that we return the computed value and not the null
          // it was previously set to
          v = str;
        });

      // returns null if the promise doesn't resolve immediately, or
      // the calculated value if it's ready
      return v;
    }
  }.property('tags')

});

// This demonstrates what's happening behind the scenes when you use
// an anonymous function followed by .property()

// Computed Property
// anotherProp: Ember.computed('firstProp', function() {
//   // code to recompute
// })


// Anonymous Function w/ .property()

// anotherProp() {
//   ...
// }.property('prop1', 'prop2')

// It's actually this behind the scenes...

// Function.prototype.property = function(listOfFieldsBeingWatched, cbFunc) {
//   return Ember.computed(listOfFieldsBeingWatched) {
//     cbFunc();
//   }
// }
