const { authenticate } = require('@feathersjs/authentication').hooks;

const cmdbClassPopulateChildren = require('../../hooks/cmdb-class-populate-children');

const cmdbClassPopulateProperties = require('../../hooks/cmdb-class-populate-properties');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [cmdbClassPopulateChildren(), cmdbClassPopulateProperties()],
    get: [cmdbClassPopulateChildren(), cmdbClassPopulateProperties()],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
