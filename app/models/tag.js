import DS from 'ember-data';

export default DS.Model.extend({
  name:   DS.attr('string'),
  slug:   DS.attr('string'),
  books:  DS.hasMany('book', {async: true})
});
