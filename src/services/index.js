const users = require('./users/users.service.js');
const cmdbClass = require('./cmdb-class/cmdb-class.service.js');
const cmdbClassRelationship = require('./cmdb-class-relationship/cmdb-class-relationship.service.js');
const cmdbClassProperty = require('./cmdb-class-property/cmdb-class-property.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(cmdbClass);
  app.configure(cmdbClassRelationship);
  app.configure(cmdbClassProperty);
};
