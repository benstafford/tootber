import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
  session: Ember.inject.service('session'),

  authorize: function(data, block) {
    var accessToken = data['token'];
    if (this.get('session.isAuthenticated') && !Ember.isEmpty(accessToken)) {
      block('Authorization', `Token token=${accessToken}`);
    }
  }
});
