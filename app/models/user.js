import DS from 'ember-data';

export default DS.Model.extend({
  'first-name': DS.attr('string'),
  username: DS.attr('string'),
  toots: DS.hasMany('toot')
});
