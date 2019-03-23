const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  let userRepos = (error, response, body) => {
    if (error) {
      console.error(error);
    }
    console.log(JSON.parse(body));
    // let resp = response.body.filter( (repo) => {
    //   return repo.owner.login === username;
    // });
    
  }

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
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