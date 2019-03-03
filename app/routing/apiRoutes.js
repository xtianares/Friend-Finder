// importing friends data
var friends = require('../data/friends.js');

// setting all API routes here
module.exports = function(app) {
    // for a raw list of friends in JSON format
    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });

    // for posting and checking friend match
    app.post('/api/friends', (req, res) => {
        // Here we take the result of the user's survey POST and parse it.
        let userInput = req.body,
            userName = userInput.name,
            userScores = userInput.scores,
            scoreArr = [], // this will store all the friend's score comparison, lowest score is the match
            scoreDiff = 0; // this will store the current friend's total score

            console.log(userScores);

        friends.forEach( (item, index) => {
            let scores = item.scores; // scores of the current potential fiend

            scores.forEach( (item, index) => {
                let questionDiff = Math.abs(item - parseInt(userScores[index])); // diff for current question
                scoreDiff += questionDiff; // adding the current question's diff to the total diff
                // console.log(scoreDiff);
            });
            scoreArr.push(scoreDiff);
            scoreDiff = 0;
            // console.log(scoreArr);
        });

        let lowestScore = Math.min(...scoreArr), // determine the lowest score in the array
            indexOfLowestScore = scoreArr.indexOf(lowestScore), // determine the index of first lowest score
            friendMatch = friends[indexOfLowestScore];

        // adding new person to the friends list array
        friends.push(userInput);

        // sending back the friend match
        res.json(friendMatch);
    });
};
