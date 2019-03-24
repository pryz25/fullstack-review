const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  full_name: { type: String, unique: true },
  owner: {
    login: String,
    id: Number,
    html_url: String
  },
  html_url: String,
  description: String,
  watchers: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let findRepos = () => {
  return Repo.find().sort( { watchers: -1 } ).limit(25);
}

let save = (gitRepo, callback) => {
  Repo.insertMany(gitRepo, (err, docs) => {
    if (err) return console.error(err);
  });
  
}
// think about what to call back

module.exports = {
  save,
  db, 
  findRepos
}