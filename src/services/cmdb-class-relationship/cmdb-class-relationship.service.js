// Initializes the `cmdb-class-relationship` service on path `/cmdb-class-relationship`
const { CmdbClassRelationship } = require('./cmdb-class-relationship.class');
const createModel = require('../../models/cmdb-class-relationship.model');
const hooks = require('./cmdb-class-relationship.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/cmdb-class-relationship', new CmdbClassRelationship(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('cmdb-class-relationship');

  service.hooks(hooks);
};
