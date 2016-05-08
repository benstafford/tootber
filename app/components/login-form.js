import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),

  actions: {
    authenticate: function() {
      let { username, password } = this.getProperties('username', 'password');
      return this.get('session').authenticate('authenticator:custom', username, password).catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    }
  }
});
