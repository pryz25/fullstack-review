const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  full_name: String,
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

let save = (err, Repo) => {
  // if (err) return console.error(err);
  // Repo.save((err, Repo) => {
  //   if (err) return console.error(err);
  //   console.log('Success!');
  // });
  
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;