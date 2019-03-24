const express = require('express');
let getReposByUsername = require('../helpers/github.js');
let app = express();
let bodyParser = require('body-parser');
let dbase = require('../database/index.js');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {

  getReposByUsername(req.body.term, dbase.save);
  
  res.sendStatus(201);
  res.end();

});

app.get('/repos', function (req, res) {
  let query = dbase.findRepos();
  query.then( (list) => {
    res.send(list);
    res.end();
  });
  
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

