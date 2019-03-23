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
  watcher_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (gitRepo, callback) => {
  Repo.insertMany(gitRepo, (err, entry) => {
    if (err) return console.error(err);
    console.log('Success!');
  });
  
}
// think about what to call back
  
module.exports = save