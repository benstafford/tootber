import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  host: "https://limitless-woodland-55914.herokuapp.com",
  authorizer: 'authorizer:custom'
});
