import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    let ret = {};
    payload.id = 1;
    ret['cats'] = payload;
    return this._normalizeResponse(store, primaryModelClass, ret, id, requestType, false);
  },
});
