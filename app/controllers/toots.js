import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['id:desc'],
  sortedToots: Ember.computed.sort('model', 'sortProperties')
});
