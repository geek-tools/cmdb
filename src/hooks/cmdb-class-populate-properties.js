module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    // Get `app`, `method`, `params` and `result` from the hook context
    const { app, method, result, params } = context;
    // Function that adds the user to a single message object
    const addProperties = async cmdbClass => {
      // Get the user based on their id, pass the `params` along so
      // that we get a safe version of the user data
      const properties = await app.service('cmdb-class-property').find({
        query: {
          class: cmdbClass._id
        }
      }, params);

      // Merge the message content to include the `user` object
      return {
        ...cmdbClass,
        properties
      };
    };

    // In a find method we need to process the entire page
    if (method === 'find') {
      // Map all data to include the `user` information
      context.result.data = await Promise.all(result.data.map(addProperties));
    } else {
      // Otherwise just update the single result
      context.result = await addProperties(result);
    }

    return context;
  };
};