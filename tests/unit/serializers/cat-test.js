import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | cat', function(hooks) {
  setupTest(hooks);

  test('it serializes records', function(assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('cat', { file: 'fuzzy.jpg'});

    let expected = { "file": "fuzzy.jpg" };
    let serializedRecord = record.serialize();

    assert.deepEqual(serializedRecord, expected);
  });
});
