// Initializes the `cmdb-class-property` service on path `/cmdb-class-property`
const { CmdbClassProperty } = require('./cmdb-class-property.class');
const createModel = require('../../models/cmdb-class-property.model');
const hooks = require('./cmdb-class-property.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/cmdb-class-property', new CmdbClassProperty(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('cmdb-class-property');

  service.hooks(hooks);
};
