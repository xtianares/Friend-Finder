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

        // check for a friend match
        let matchArr = [], // this will store all the friend's score comparison, lowest score is the match
            scoreDiff = 0; // this will store the current friend's total score

        friends.forEach(function(item, index) {
            // console.log(item.scores);
            // console.log(index);

            let scores = item.scores; // scores of the current potential fiend

            scores.forEach(function(item, index) {
                let questionDiff = Math.abs(item - userScores[index]); // diff for current question
                scoreDiff += questionDiff; // adding the current question's diff to the total diff
                console.log(scoreDiff);
            });

            matchArr.push(scoreDiff);
            scoreDiff = 0;
            console.log(matchArr);
        });

        // need to push new person after match is found otherwise person will match self
        friends.push(userInput);

        // need to update this with the match
        res.json(friends);
    });

};
