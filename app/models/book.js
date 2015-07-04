import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  blurb: DS.attr('string'),
  amazonURL: DS.attr('string'),
  imgURL: DS.attr('string')
});
