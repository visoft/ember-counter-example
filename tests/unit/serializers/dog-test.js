import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | dog', function(hooks) {
  setupTest(hooks);

  test('it serializes records', function(assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('dog', { url: 'fluffy.jpg'});

    let expected = { "url": "fluffy.jpg" };
    let serializedRecord = record.serialize();

    assert.deepEqual(serializedRecord, expected);
  });
});
