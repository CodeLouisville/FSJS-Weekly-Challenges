var github = require('./github.js');
//var usernames = ["josephmudd","codelouisville"];
var usernames = process.argv;
usernames.shift(); //node executable path
usernames.shift(); //path to app.js
usernames.forEach(function(user){
  github.getRepos(user).then(function(repolist){
    console.log(user + "\n-----------------------\n");
    repolist.forEach(function(repo){
      console.log(repo.name + "\n");
    });
  }).catch(function(error){
    console.log(error);
  });
});
