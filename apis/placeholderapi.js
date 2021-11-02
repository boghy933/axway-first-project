var APIBuilder = require('@axway/api-builder-runtime');

var TestAPI = APIBuilder.API.extend({
	group: 'placeholderapi',
	path: '/api/placeholder/:id',
	method: 'GET',
	description: 'this is an api that shows how to implement an API',
	model: 'postModel',
	before: 'pre_example',
	after: 'post_example',
	parameters: {
		id: { description: 'the post' }
	},
	action: function (req, resp, next) {
		// invoke the model find method passing the id parameter
		// stream the result back as response
		resp.stream(req.model.find, req.params.id, next);
	}
});

module.exports = TestAPI;
