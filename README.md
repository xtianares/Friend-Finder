# Friend Finder Application
Friend Finder is an app that matches a user to another user based on the user's responses to a ten question survey. The user responds to questions on a scale of 1-5 based on how much the user agrees or disagrees. When the survey is submitted, a comparison is performed between the new user and the users in record for the closest match. The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined.

The application is built using a Node.js and Express server on the back-end and is using Bootstrap 4 for the front-end. It is deployed in Heroku.

### Demo
To see the application in action please visit: https://protected-thicket-28248.herokuapp.com/

## Local Installation

To install the application locally run the commands below in your terminal/bash:

```
git clone https://github.com/xtianares/Friend-Finder
cd friend-finder
npm install
```

## Running Locally
To start the a local server run this command in your terminal/bash.

```
node server.js
```

Once you get the local server running visit http://localhost:3000/ in your browser.

### Technologies Used
NodeJS
ExpressJS
Twitter Bootstrap 4
