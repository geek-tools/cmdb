const assert = require('assert');
const app = require('../../src/app');

describe('\'cmdb-class-property\' service', () => {
  it('registered the service', () => {
    const service = app.service('cmdb-class-property');

    assert.ok(service, 'Registered the service');
  });
});
