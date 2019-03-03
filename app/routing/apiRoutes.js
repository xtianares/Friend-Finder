// importing friends data
var friends = require('../data/friends.js');

// setting all API routes here
module.exports = function(app) {

    // for a raw list of friends in JSON format
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    // for posting and checking friend match
    app.post('/api/friends', function(req, res) {
        // Here we take the result of the user's survey POST and parse it.
        let userInput = req.body,
            userName = userInput.name,
            userScores = userInput.scores;

        friends.push(userInput);

        // need to update this with the match
        res.json(friends);
    });

};
