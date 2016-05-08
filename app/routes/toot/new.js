import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return {};
  },
  actions: {
    save() {
      const newToot = this.get('store').createRecord('toot', this.currentModel);
      newToot.save().then((toot) => {
        this.transitionTo('toots');
      });
    },
    cancel() {
      this.transitionTo('toots');
    }
  }
});
