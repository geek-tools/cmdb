const assert = require('assert');
const app = require('../../src/app');

describe('\'cmdb-class-relationship\' service', () => {
  it('registered the service', () => {
    const service = app.service('cmdb-class-relationship');

    assert.ok(service, 'Registered the service');
  });
});
