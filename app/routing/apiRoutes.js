// importing friends data
var friends = require('../data/friends.js');

// setting all API routes here
module.exports = function(app) {

	// for a raw list of friends in JSON format
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

};
