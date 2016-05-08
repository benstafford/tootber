import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  tokenEndpoint: 'https://limitless-woodland-55914.herokuapp.com/api/v1/login',
  restore: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate: function(username, password) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: this.tokenEndpoint,
        type: 'POST',
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        headers: {
          "Authorization": "Basic " + btoa(username + ":" + password)
        }
      }).then(function(response) {
        Ember.run(function() {
          resolve({
            token: response.auth_token
          })
        });
      }, function(xhr, status, error) {
        var response = xhr.responseText;
        Ember.run(function() {
          reject(response);
        });
      });
    });
  },

  invalidate: function() {
    console.log('invalidate...');
    return Ember.RSVP.resolve();
  }
});
