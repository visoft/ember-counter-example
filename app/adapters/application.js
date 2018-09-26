import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  buildUrl() {
    return this.host;
  },
  pathForType() {
    return null;
  }
});
