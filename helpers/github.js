const request = require('request');
const config = require('../config.js');
let save = require('../database/index.js');


let getReposByUsername = (username, callback) => {
  
  let userRepos = (error, response, body) => {
    if (error) {
      console.error(error);
    }
    callback(JSON.parse(body));
  };

  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  
  request(options, userRepos);
}

module.exports = getReposByUsername;