import DS from 'ember-data';

export default DS.Model.extend({
  first_name: DS.attr('string'),
  username: DS.attr('string'),
  body: DS.attr('string')
});
